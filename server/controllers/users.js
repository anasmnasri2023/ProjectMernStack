const usersModel = require("../models/users");
const profileValidation = require("../validation/profileValidation");
const usersValidation = require("../validation/usersValidation.js");

/* GetAll users */
const GetAll = async (req, res) => {
  try {
    const data = await usersModel.find();
    res.status(200).json({
      length: data.length,
      data: data,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* GetOne users */
const GetOne = async (req, res) => {
  try {
    const data = await usersModel.findOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* UpdateOne users */
const UpdateOne = async (req, res) => {
  const { errors, isValid } = usersValidation(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      req.body.roles = req.body.roles.map((role) => role.value);
      const data = await usersModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(200).json({
        success: "updated",
        data,
      });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* UpdateOne users */
const UpdateProfile = async (req, res) => {
  const { errors, isValid } = profileValidation(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await usersModel.findOneAndUpdate(
        { _id: req.user.id },
        req.body,
        { new: true }
      );
      res.status(200).json({
        success: "updated",
        data,
      });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* DeleteOne users */
const DeleteOne = async (req, res) => {
  try {
    await usersModel.deleteOne({ _id: req.params.id });
    res.status(201).json({
      message: "deleted",
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* update role */
const UpdateRole = async (req, res) => {
  try {
    const data = await usersModel.updateOne(
      {
        _id: req.params.id,
      },
      {
        $push: {
          roles: req.body.role,
        },
      }
    );
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

/* delete role */
const DeleteRole = async (req, res) => {
  try {
    const data = await usersModel.updateOne(
      {
        _id: req.params.id,
      },
      {
        $pull: {
          roles: req.body.role,
        },
      }
    );
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

module.exports = {
  GetAll,
  GetOne,
  UpdateOne,
  DeleteOne,
  UpdateRole,
  DeleteRole,
  UpdateProfile,
};
