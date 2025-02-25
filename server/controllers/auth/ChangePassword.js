const UserModel = require("../../models/users");
const bcrypt = require("bcryptjs");
const resetValidation = require("../../validation/resetValidation");
const ChangePassword = async (req, res) => {
  const { errors, isValid } = resetValidation(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const hash = bcrypt.hashSync(req.body.password, 10); //hashed password
      await UserModel.findOneAndUpdate(
        {
          _id: req.user._id,
        },
        {
          password: hash,
        },
        {
          new: true,
          upsert: true,
        }
      );
      res.status(200).json({
        status: "success",
      });
    }
  } catch (error) {
    console.log(error);
    resizeBy.status(500).json({ message: error.message });
  }
};

module.exports = {
  ChangePassword,
};
