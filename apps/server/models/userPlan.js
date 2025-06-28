
const Subscription = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
  },
  plan: {
    type: String,
    required: [true, "Subscription plan is required"],
    enum: ["free", "basic", "premium"], // Example plans
  },
  startDate: {
    type: Date,
    default: Date.now,
    required: [true, "Start date is required"],
  },
  endDate: {
    type: Date,
    required: [true, "End date is required"],
    validate: {
      validator: function(value) {
        return value > this.startDate;
      }             ,
      message: "End date must be after start date",
    },
  },
  status: {
    type: String,
    required: [true, "Subscription status is required"],
    enum: ["active", "inactive", "cancelled"], // Example statuses
    default: "active",
  },
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