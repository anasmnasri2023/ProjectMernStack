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
    nodeMailer(
      req.body.email,
      "Password Reset",
      `
    <p>Change Account Password  ${req.body.email}</p>
    <p><b>http://localhost:5173/reset?email=${req.body.email}&_token=${token}</b></p>
    `
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
    const { email, token } = req.query;

    if (email && token) {
      const user = await UserModel.findOne({
        email,
        reset_token: token,
      });

      const decoded = jwtDecode(token);
      const current_date = Date.now() / 1000;
      const expiresToken = decoded.exp;
      if (expiresToken > current_date && user) {
        const { errors, isValid } = resetValidation(req.body);
        const hash = bcrypt.hashSync(req.body.password, 10);
        if (!isValid) {
          res.status(404).json(errors);
        } else {
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
          .json({ password: "Error ocurred please try again" });
      }
    } else {
      return res
        .status(500)
        .json({ password: "Error ocurred please try again" });
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
