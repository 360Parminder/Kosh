const mongoose = require("mongoose");

const Subscription = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
  },
  Subscription:[
    {
     appName:{
         type: String,
         required: [true, "App name is required"],
     },
     amount: {
       type: Number,
       required: [true, "Amount is required"],
     },
     billCycle: {
       type: String,
       required: [true, "Billing cycle is required"],
       enum: ["monthly", "yearly"], // Example billing cycles
     },
     paymentMethod: {
       type: String,
       required: [true, "Payment method is required"],
     },
     autoPay: {
       type: Boolean,
       default: false, // Default to false if not specified
     },
     nextBillingDate: {
       type: Date,
       required: [true, "Next billing date is required"],
     },
     notes: {
       type: String,
       trim: true, // Trim whitespace
     },
    }
  ],
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Subscription", Subscription);