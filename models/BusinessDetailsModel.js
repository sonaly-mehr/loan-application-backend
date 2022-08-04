const mongoose = require("mongoose");
const validator = require("validator");

const businessSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: [true, "Please Enter Your Business Name"]
  },
  GstNo: {
    type: Number,
    required: [true, "Please Enter Your GST Number"],
    minLength: [15, "GST number can not be less 15 Number"],
  },
  address: {
    type: String,
    required: [true, "Please Enter Your Address"],
  },
  city: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});


module.exports = mongoose.model("Business", businessSchema);