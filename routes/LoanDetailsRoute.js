const express = require('express');
const { LoanDetails } = require('../controllers/LoanDetailsController');
const router = express.Router();

router.route("/loan/details").post(LoanDetails);

module.exports= router;