const { extractTransactionsFromPDF } = require('../utils/extractFromPdf');

exports.uploadAccountStatement = async (req, res) => {
    
    try {
        const file = req.file;
        // console.log('File received:', file);
        
        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const transactions = await extractTransactionsFromPDF(file.path);
        console.log('Extracted transactions:', transactions);
        

        // Process the uploaded file (e.g., save it to the database)
        // ...

        res.status(200).json({ message: 'File uploaded successfully', transactions });
    } catch (error) {
        console.log('Error uploading file:', error);
        
        res.status(500).json({ message: 'Error uploading file', error });
    }
}