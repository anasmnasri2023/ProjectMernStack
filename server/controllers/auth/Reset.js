const UserModel = require("../../models/users");
const bcrypt = require("bcryptjs");
const { nodeMailer } = require("../../config/nodeMailer");
const jwt = require("jsonwebtoken");
const { default: jwtDecode } = require("jwt-decode");
const resetValidation = require("../../validation/resetValidation");

const CheckMail = async (req, res) => {
  try {
    const exist = await UserModel.findOne({ email: req.body.email });
    if (!exist) {
      return res.status(404).json({ email: "user not found" });
    }
    var token = jwt.sign(
      {
        id: exist._id,
        email: exist.email,
      },
      process.env.PRIVATE_KEY,
      { expiresIn: "1h" }
    );

    /* save token in db */
    await UserModel.findByIdAndUpdate(
      {
        _id: exist._id,
      },
      {
        reset_token: token,
      },
      {
        new: true,
      }
    );
    
    // Create the reset link
    const resetLink = `http://localhost:5173/reset_password/${token}`;
    
    // Send email with simple subject "Reset Password Link" and just the link
    nodeMailer(
      req.body.email,
      "Reset Password Link",
      resetLink
    );
    
    res.status(200).json({
      status: "success",
      message: "Check your email please",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

/* Reset password */
const ResetPassword = async (req, res) => {
  try {
    const { token } = req.params; // Changed from req.query to req.params
    
    if (token) {
      // Decode token to get user info
      const decoded = jwtDecode(token);
      const email = decoded.email;
      const current_date = Date.now() / 1000;
      const expiresToken = decoded.exp;
      
      // Find user with this email and reset token
      const user = await UserModel.findOne({
        email,
        reset_token: token,
      });
      
      if (expiresToken > current_date && user) {
        const { errors, isValid } = resetValidation(req.body);
        
        if (!isValid) {
          res.status(404).json(errors);
        } else {
          const hash = bcrypt.hashSync(req.body.password, 10);
          
          await UserModel.updateOne(
            {
              _id: user._id,
            },
            {
              password: hash,
              reset_token: "",
            }
          );
          
          res.status(200).json({
            status: "success",
            message: "Password updated with success",
          });
        }
      } else {
        return res
          .status(500)
          .json({ password: "Error occurred please try again" });
      }
    } else {
      return res
        .status(500)
        .json({ password: "Error occurred please try again" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  CheckMail,
  ResetPassword,
};