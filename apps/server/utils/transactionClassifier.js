function classifyTransactions(transactions) {
    const subscriptionKeywords = [
        'netflix', 'godaddy', 'healthplix', 'popclub', 'mobikwik', 'quickcart', 'razorpay software', 'jiosaavn', 'spotify'
    ];
    const billKeywords = [
        'bbps', 'bijli', 'electric', 'water', 'broadband', 'reliance', 'bsnl', 'vi recharge', 'airtel', 'postpaid', 'bbpsbp', 'billdesk'
    ];
    const refundKeywords = ['upi/rev/', 'rev', 'reversed'];
    const merchantKeywords = ['flipkart', 'amazon', 'paytm', 'bigbasket', 'swiggy', 'zomato'];

    const categorized = {
        subscriptions: [],
        bills: [],
        refunds: [],
        merchantPurchases: [],
        normalTransfers: []
    };

    for (const txn of transactions) {
        const desc = txn.description.toLowerCase();
        
        // Extract app name from description
        let appName = "Unknown";
        for (const keyword of [...subscriptionKeywords, ...billKeywords, ...merchantKeywords]) {
            if (desc.includes(keyword)) {
                appName = keyword.charAt(0).toUpperCase() + keyword.slice(1);
                break;
            }
        }
        
        // Determine payment method based on transaction description
        let paymentMethod = "Unknown";
        if (desc.includes('upi')) {
            paymentMethod = "UPI";
        } else if (desc.includes('neft')) {
            paymentMethod = "NEFT";
        } else if (desc.includes('imps')) {
            paymentMethod = "IMPS";
        } else if (desc.includes('rtgs')) {
            paymentMethod = "RTGS";
        } else if (desc.includes('credit card') || desc.includes('cr card')) {
            paymentMethod = "Credit Card";
        } else if (desc.includes('debit card') || desc.includes('db card')) {
            paymentMethod = "Debit Card";
        }
        
        // Create transaction info object with required details
        const transactionInfo = {
            appName: appName,
            paymentMethod: paymentMethod,
            date: txn.date,
            description: txn.description,
            amount: txn.amount,
            ...txn  // Include all original transaction data
        };

        if (refundKeywords.some(k => desc.includes(k))) {
            categorized.refunds.push(transactionInfo);
        } else if (subscriptionKeywords.some(k => desc.includes(k))) {
            categorized.subscriptions.push(transactionInfo);
        } else if (billKeywords.some(k => desc.includes(k))) {
            categorized.bills.push(transactionInfo);
        } else if (merchantKeywords.some(k => desc.includes(k))) {
            categorized.merchantPurchases.push(transactionInfo);
        } else {
            categorized.normalTransfers.push(transactionInfo);
        }
    }

    return categorized;
}

module.exports = { classifyTransactions };
