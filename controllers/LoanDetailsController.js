const Business = require('../models/BusinessDetailsModel');
const Loan = require('../models/LoanDetailsModel');

exports.LoanDetails = async (req, res, next) => {
    const {
        loanAmount,
        interestRate,
        loanTenure,
    } = req.body;
  
    const loanDetails = await Loan.create({
        loanAmount,
        interestRate,
        loanTenure,
        // owner: req.user._id
    });
  
    res.status(201).json({
      success: true,
      loanDetails,
    });
  };
