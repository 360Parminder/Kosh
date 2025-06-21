const fs = require('fs');
const pdfParse = require('pdf-parse');
const dayjs = require('dayjs');

function parseTransactionBlock(block) {
  if (block.length < 5) return null;

  // Example: [ '22 Apr', '2025', '22 Apr', '2025', 'BY TRANSFER-', ..., '12,000.00 12,014.07' ]
  const dateStr = `${block[0]} ${block[1]}`;
  const date = dayjs(dateStr, 'DD MMM YYYY');

  const description = block.slice(4, block.length - 1).join(' ');
  const lastLine = block[block.length - 1];

  // Match format like "12,000.00   12,014.07"
  const amountMatch = lastLine.match(/(\d{1,3}(,\d{3})*\.\d{2})/);
  const amount = amountMatch ? parseFloat(amountMatch[1].replace(/,/g, '')) : null;

  if (!amount || !date.isValid()) return null;

  return {
    date: date.toDate(),
    description: description.toLowerCase(),
    amount,
  };
}

async function extractTransactionsFromPDF(filePath, monthRange = 3) {
  const dataBuffer = fs.readFileSync(filePath);
  const pdfData = await pdfParse(dataBuffer);
  const lines = pdfData.text.split('\n').map(l => l.trim()).filter(Boolean);

  const today = dayjs();
  const startDate = today.subtract(monthRange, 'month');

  const transactions = [];
  let buffer = [];

  for (let line of lines) {
    if (line.match(/^\d{1,2} [A-Za-z]{3}$/)) {
      // Likely start of a new transaction (e.g., '22 Apr')
      if (buffer.length >= 5) {
        const tx = parseTransactionBlock(buffer);
        if (tx && dayjs(tx.date).isAfter(startDate)) {
          transactions.push(tx);
        }
        buffer = [];
      }
    }
    buffer.push(line);
  }

  // Handle last block
  if (buffer.length >= 5) {
    const tx = parseTransactionBlock(buffer);
    if (tx && dayjs(tx.date).isAfter(startDate)) {
      transactions.push(tx);
    }
  }

  console.log(`✅ Extracted ${transactions.length} transactions`);
  return transactions;
}

module.exports = { extractTransactionsFromPDF };
