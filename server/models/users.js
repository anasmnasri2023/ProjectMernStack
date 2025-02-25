const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
    picture: {
      type: String,
    },
    roles: {
      type: [String],
      default: ["ENGINEER"],
    },
    reset_token: {
      type: String,
    },
  },
  { timestamp: true }
);
module.exports = mongoose.model("users", usersSchema);
