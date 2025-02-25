const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const notificationsSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      required: false,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    link: {
      type: String,
    },
    text: {
      type: String,
    },
    isSeen: {
      type: Boolean,
      default: false
    }
  },
  { timestamp: true }
);
module.exports = mongoose.model("notifications", notificationsSchema);
