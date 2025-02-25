const tasksModel = require("../models/tasks");
const socket = require("../socket");
const tasksValidation = require("../validation/tasksValidation.js");
const { addNotification } = require("./notifications");

/* Add tasks */
const Add = async (req, res) => {
  const { errors, isValid } = tasksValidation(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      req.body.project = req.body.project.value.toString();
      req.body.assigns = req.body.assigns.map((a) => {
        return a.value;
      });
      req.body.priority = req.body.priority.value.toString();
      req.body.status = req.body.status.value.toString();
      req.body.type = req.body.type.value.toString();
      const data = await tasksModel.create(req.body);
      //people that are assigned
      const sockets_of_these_people = req.body.assigns.reduce(
        (t, n) => (t = [...t, ...socket.methods.getUserSockets(n)]),
        []
      );
      let notification;
      for (const assigned of req.body.assigns) {
        notification = await addNotification({
          receiver: assigned,
          link: "#",
          text: "You have been assigned a new task "
        });
      }
      if(sockets_of_these_people.length > 0 ) socket.io.to(sockets_of_these_people).emit("notification", notification);
      res.status(201).json({
        success: true,
        data: data,
      });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* GetAll tasks */
const GetAll = async (req, res) => {
  try {
    const data = await tasksModel
      .find()
      .populate({
        path: "assigns",
        select: "-password",
      })
      .populate({
        path: "comments",
        populate: {
          path: "by",
          model: "users",
          select: "-password",
        },
      });

    res.status(200).json({
      length: data.length,
      data: data,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* GetOne tasks */
const GetOne = async (req, res) => {
  try {
    const data = await tasksModel
      .findOne({ _id: req.params.id })
      .populate({
        path: "assigns",
        select: "-password",
      })
      .populate({
        path: "comments",
        populate: {
          path: "by",
          model: "users",
          select: "-password",
        },
      });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* UpdateOne tasks */
const UpdateOne = async (req, res) => {
  const { errors, isValid } = tasksValidation(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      req.body.project = req.body.project.value
        ? req.body.project.value.toString()
        : req.body.project;

      req.body.assigns = req.body.assigns.map((a) => {
        return a.value;
      });

      req.body.priority = req.body.priority.value
        ? req.body.priority.value.toString()
        : req.body.priority;

      req.body.status = req.body.status.value
        ? req.body.status.value.toString()
        : req.body.status;

      req.body.type = req.body.type.value
        ? req.body.type.value.toString()
        : req.body.type;
      const data = await tasksModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );

      res.status(201).json({
        success: true,
        data: data,
      });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* DeleteOne tasks */
const DeleteOne = async (req, res) => {
  try {
    await tasksModel.deleteOne({ _id: req.params.id });
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
