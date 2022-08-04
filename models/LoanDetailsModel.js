const mongoose = require("mongoose");
const validator = require("validator");

const loanSchema = new mongoose.Schema({
  loanAmount: {
    type: Number,
    required: [true, "Please Enter Your Loan Amount"]
  },
  interestRate: {
    type: String,
    required: [true, "Please Enter Your Interest Rate"],
  },
  loanTenure: {
    type: Number,
    required: [true, "Please Enter Your Loan Tenure"],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});


module.exports = mongoose.model("Loan", loanSchema);