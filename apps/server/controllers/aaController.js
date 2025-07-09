const { extractTransactionsFromPDF } = require("../utils/extractFromPdf");
const { classifyTransactions } = require("../utils/transactionClassifier");
const SubscriptionModel = require("../models/SubscriptionModel");
const axios = require("axios");

exports.uploadAccountStatement = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Extract and classify transactions
    const transactions = await extractTransactionsFromPDF(file.path);
    if (!transactions || transactions.length === 0) {
      return res
        .status(400)
        .json({ message: "No transactions found in the file" });
    }

    const classifiedData = await classifyTransactions(transactions);
    // console.log('Classified subscriptions:', classifiedData);

    // Get user ID from authenticated request
    const userId = req.user._id; // Assuming authentication middleware sets req.user

    // Process subscriptions for saving to database
    const subscriptionItems = classifiedData.subscriptions.map((sub) => {
      // Calculate next billing date - for example purposes, set to 1 month from now
      const nextBillingDate = new Date(sub.date);
      nextBillingDate.setMonth(nextBillingDate.getMonth() + 1);

      return {
        appName: sub.appName,
        amount: sub.amount,
        billCycle: "monthly", // Default to monthly, adjust as needed
        paymentMethod: sub.paymentMethod, // Default based on transaction type
        autoPay: true, // Assuming auto-pay is enabled
        nextBillingDate,
        notes: sub.description,
      };
    });

    // Find existing subscription document for user or create new one
    let subscriptionDoc = await SubscriptionModel.findOne({ userId });

    if (subscriptionDoc) {
      // Update existing subscriptions
      subscriptionDoc.Subscription = [
        ...subscriptionDoc.Subscription,
        ...subscriptionItems,
      ];
      subscriptionDoc.updatedAt = Date.now();
      await subscriptionDoc.save();
    } else {
      // Create new subscription document
      subscriptionDoc = await SubscriptionModel.create({
        userId,
        Subscription: subscriptionItems,
      });
    }

    res.status(200).json({
      message: "File uploaded and subscriptions saved successfully",
      statement: classifiedData,
    });
  } catch (error) {
    console.log("Error uploading file:", error);
    res
      .status(500)
      .json({ message: "Error uploading file", error: error.message });
  }
};

exports.getSubscriptions = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming authentication middleware sets req.user

    const subscriptionDoc = await SubscriptionModel.findOne({ userId });

    if (!subscriptionDoc) {
      return res
        .status(404)
        .json({ message: "No subscriptions found for this user" });
    }

    res.status(200).json({
      message: "Subscriptions retrieved successfully",
      subscriptions: subscriptionDoc.Subscription,
    });
  } catch (error) {
    console.log("Error retrieving subscriptions:", error);
    res
      .status(500)
      .json({
        message: "Error retrieving subscriptions",
        error: error.message,
      });
  }
};
exports.initiateLink = async (req, res) => {
    const { mobile } = req.body;
  try {
    const response = await axios.post(`${process.env.AA_API_URL}/v2/consents`, {
      consentDuration: {
        unit: "MONTH",
        value: "12",
      },
      vua: mobile,
      dataRange: {
        from: "2024-01-01T00:00:00Z",
        to: "2025-01-01T00:00:00Z",
      },
      context: [],
    },{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.AA_API_TOKEN}`,
            "x-product-instance-id": process.env.AA_PRODUCT_INSTANCE_ID,
        },
    });
    console.log("Link initiation response:", response);
    if (response.status !== 201) {
      return res
        .status(response.status)
        .json({ message: "Failed to initiate link", error: response.data });
    }

    res.status(200).json({ message: "Link initiation successful", data: response.data });
  } catch (error) {
    console.log("Error initiating link:", error);
    res
      .status(500)
      .json({ message: "Error initiating link", error: error.message });
  }
};
