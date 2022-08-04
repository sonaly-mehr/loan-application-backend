const express = require('express');
const { BusinessDetails } = require('../controllers/BusinessDetailsController');
const router = express.Router();

router.route("/business/details").post(BusinessDetails);

module.exports= router;