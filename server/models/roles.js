const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const rolesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);
module.exports = mongoose.model("roles", rolesSchema);
