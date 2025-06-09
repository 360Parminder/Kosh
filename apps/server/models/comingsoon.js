const mongoose = require('mongoose');
const validator = require('validator');
const comingSoonSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: [true, 'Please fill your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ComingSoon = mongoose.model('ComingSoon', comingSoonSchema);

module.exports = ComingSoon;