const express = require('express');
const { UserDetails, getUserDetails } = require('../controllers/UserDetailsController');
const router = express.Router();

router.route("/user/details").post(UserDetails).get(getUserDetails);

module.exports= router;