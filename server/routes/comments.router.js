const express = require("express");
const Router = express();
const Controllers = require("../controllers/comments");
const passport = require("passport");

Router.post(
  "/tasks/:id/comments",
  passport.authenticate("jwt", { session: false }),
  Controllers.AddComment
);

Router.delete(
  "/tasks/:id/comments/:c_id",
  passport.authenticate("jwt", { session: false }),
  Controllers.DeleteComment
);

module.exports = Router;
