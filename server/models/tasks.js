const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tasksSchema = new Schema(
  {
    project: {
      type: String,
      required: true,
    },
    assigns: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    start_date: {
      type: String,
    },
    end_date: {
      type: String,
    },
    priority: {
      type: String,
      enum: ["1", "2", "3"],
    },
    status: {
      type: String,
      enum: ["1", "2", "3"],
    },
    type: {
      type: String,
      enum: ["1", "2", "3"],
    },
    comments: [
      {
        content: String,
        by: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
        image: String
      },
    ],
  },
  { timestamp: true }
);
module.exports = mongoose.model("tasks", tasksSchema);
