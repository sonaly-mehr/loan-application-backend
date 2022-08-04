const Business = require('../models/BusinessDetailsModel');
const User = require('../models/UserDetailsModel');

exports.BusinessDetails = async (req, res, next) => {
    const {
        businessName,
        GstNo,
        address,
    } = req.body;
  
    const businessDetails = await Business.create({
        businessName,
        GstNo,
        address,
        city: req.body.city,
        // owner: req.user._id
    });
  
    res.status(201).json({
      success: true,
      businessDetails,
    });
  };

exports.getBusinessDetails = async(req, res, next)=> {
    const business = await Business.find();
    res.status(200).json({
        success: true,
        business,
      });
}
