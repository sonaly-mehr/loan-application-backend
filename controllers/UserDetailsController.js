const User = require('../models/UserDetailsModel');

exports.UserDetails = async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        phoneNo
    } = req.body;
  
    const userDetails = await User.create({
        firstName,
        lastName,
        email,
        phoneNo
    });
  
    res.status(201).json({
      success: true,
      userDetails,
    });
  };

exports.getUserDetails = async(req, res, next)=> {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users,
      });
}
