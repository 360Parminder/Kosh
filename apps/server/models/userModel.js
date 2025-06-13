const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  avatar: {
    type: String,
    default: "https://res.cloudinary.com/dvo4tvvgb/image/upload/v1737770516/Profile/image.jpg",
    validate: {
      validator: function(el) {
        return validator.isURL(el);
      },
      message: "Please provide a valid URL for the avatar",
    },
  },
  firstname: {
    type: String,
    required: [true, "Please fill your firstname"],
  },
  lastname: {
    type: String,
    required: [true, "Please fill your lastname"],
  },
  email: {
    type: String,
    required: [true, "Please fill your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, " Please provide a valid email"],
  },
  verifyEmail: {
    type: Boolean,
    default: false,
    select: false, // Don't return this field by default
  },
  phone: {
    type: String,
    required: [true, "Please fill your phone number"],
    validate: {
      validator: function(el) {
        return validator.isMobilePhone(el, "any", { strictMode: false });
      },
      message: "Please provide a valid phone number",
    },
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Please fill your date of birth"],
    validate: {
      validator: function(el) {
        return validator.isDate(el);
      },
      message: "Please provide a valid date of birth",
    },
  },
  address: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please fill your password"],
    minLength: 6,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please fill your password confirm"],
    validate: {
      validator: function(el) {
        // "this" works only on create and save
        return el === this.password;
      },
      message: "Your password and confirmation password are not the same",
    },
  },
  role: {
    type: String,
    enum: ["admin", "developer", "tester","user"],
    default: "user",
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

// encrypt the password using 'bcryptjs'
// Mongoose -> Document Middleware
userSchema.pre("save", async function(next) {
  // check the password if it is modified
  if (!this.isModified("password")) {
    return next();
  }

  // Hashing the password
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

// This is Instance Method that is gonna be available on all documents in a certain collection
userSchema.methods.correctPassword = async function(
  typedPassword,
  originalPassword,
) {
  return await bcrypt.compare(typedPassword, originalPassword);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
