const express = require("express");
const Router = express();
const { getNotifications } = require("../controllers/notifications");
const passport = require("passport");

Router.get(
  "/notifications",
  passport.authenticate("jwt", { session: false }),
  getNotifications
);

module.exports = Router;
