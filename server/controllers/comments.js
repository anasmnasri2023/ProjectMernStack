const tasksModel = require("../models/tasks");
const { default: axios } = require("axios");
// const socket = require("../socket");

const AddComment = async (req, res) => {
  try {
    if (!req.body.comment) {
      return res.status(404).json({ comment: "Required comment" });
    }
    let url
    if (req.body.file) {
      const {
        data: {
          data: { image: {
            url: tempURL
          } },
        },
      } = await axios.post(
        "https://api.imgbb.com/1/upload?key=bfbedf25f7c1823b4087640a7429a82b",
        { image: req.body.file },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      url = tempURL
    }
    const data = await tasksModel.updateOne(
      { _id: req.params.id },
      {
        $push: {
          comments: {
            content: req.body.comment,
            by: req.user.id,
            image: url
          },
        },
      }
    );
    // const taskOwner = await taskOwner.findOne("")
    // socket.io.to(socket.methods.getUserSockets(taskOwner)).emit("notification", data)
    return res.status(201).send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const UpdateComment = async (req, res) => {
  try {
    if (!req.body.comment) {
      return res.status(404).json({ comment: "Required comment" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const DeleteComment = async (req, res) => {
  try {
    const data = await tasksModel.updateOne(
      { _id: req.params.id },
      {
        $pull: {
          comments: {
            _id: req.params.c_id,
          },
        },
      }
    );
    return res.status(201).send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  AddComment,
  UpdateComment,
  DeleteComment,
};
