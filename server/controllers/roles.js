const rolesModel = require("../models/roles");
const rolesValidation = require("../validation/rolesValidation.js");

/* Add roles */
const Add = async (req, res) => {
  const { errors, isValid } = rolesValidation(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await rolesModel.create(req.body);
      res.status(201).json({
        success: true,
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

/* GetAll roles */
const GetAll = async (req, res) => {
  try {
    const data = await rolesModel.find();
    res.status(200).json({
      length: data.length,
      data: data,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* GetOne roles */
const GetOne = async (req, res) => {
  try {
    const data = await rolesModel.findOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* UpdateOne roles */
const UpdateOne = async (req, res) => {
  const { errors, isValid } = rolesValidation(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await rolesModel.findOneAndUpdate(
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

/* DeleteOne roles */
const DeleteOne = async (req, res) => {
  try {
    await rolesModel.deleteOne({ _id: req.params.id });
    res.status(201).json({
      message: "deleted",
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  Add,
  GetAll,
  GetOne,
  UpdateOne,
  DeleteOne,
};
