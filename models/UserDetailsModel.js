const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Enter Your First Name"],
    maxLength: [10, "Name cannot exceed 10 characters"],
    minLength: [1, "Name should have more than 1 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Please Enter Your Last Name"],
    maxLength: [10, "Name cannot exceed 10 characters"],
    minLength: [1, "Name should have more than 1 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  age: {
    type: Number
  },
  phoneNo: {
    type: String,
    required: [true, "Please Enter Your Phone Number"],
  },
  businessDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
  },
  loanDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Loan",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});


module.exports = mongoose.model("User", userSchema);