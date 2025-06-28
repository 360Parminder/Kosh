const { extractTransactionsFromPDF } = require('../utils/extractFromPdf');
const { classifyTransactions } = require('../utils/transactionClassifier');
const mongoose = require('mongoose');
const SubscriptionModel = require('../models/SubscriptionModel');

exports.uploadAccountStatement = async (req, res) => {
    try {
        const file = req.file;
        
        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        
        // Extract and classify transactions
        const transactions = await extractTransactionsFromPDF(file.path);
        if (!transactions || transactions.length === 0) {
            return res.status(400).json({ message: 'No transactions found in the file' });
        }
        
        const classifiedData = await classifyTransactions(transactions);
        // console.log('Classified subscriptions:', classifiedData);
        
        // Get user ID from authenticated request
        const userId = req.user._id; // Assuming authentication middleware sets req.user
        
        // Process subscriptions for saving to database
        const subscriptionItems = classifiedData.subscriptions.map(sub => {
            // Calculate next billing date - for example purposes, set to 1 month from now
            const nextBillingDate = new Date(sub.date);
            nextBillingDate.setMonth(nextBillingDate.getMonth() + 1);
            
            return {
                appName: sub.appName,
                amount: sub.amount,
                billCycle: 'monthly', // Default to monthly, adjust as needed
                paymentMethod: sub.paymentMethod, // Default based on transaction type
                autoPay: true, // Assuming auto-pay is enabled
                nextBillingDate,
                notes: sub.description
            };
        });
        
        // Find existing subscription document for user or create new one
        let subscriptionDoc = await SubscriptionModel.findOne({ userId });
        
        if (subscriptionDoc) {
            // Update existing subscriptions
            subscriptionDoc.Subscription = [...subscriptionDoc.Subscription, ...subscriptionItems];
            subscriptionDoc.updatedAt = Date.now();
            await subscriptionDoc.save();
        } else {
            // Create new subscription document
            subscriptionDoc = await SubscriptionModel.create({
                userId,
                Subscription: subscriptionItems
            });
        }

        res.status(200).json({ 
            message: 'File uploaded and subscriptions saved successfully', 
            statement: classifiedData
        });
    } catch (error) {
        console.log('Error uploading file:', error);
        res.status(500).json({ message: 'Error uploading file', error: error.message });
    }
}