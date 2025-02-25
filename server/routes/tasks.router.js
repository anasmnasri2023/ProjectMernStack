const express = require("express");
const Router = express();
const Controllers = require("../controllers/tasks");
const passport = require("passport");

Router.post(
  "/tasks",
  passport.authenticate("jwt", { session: false }),
  Controllers.Add
);
Router.get(
  "/tasks",
  passport.authenticate("jwt", { session: false }),
  Controllers.GetAll
);
Router.get(
  "/tasks/:id",
  passport.authenticate("jwt", { session: false }),
  Controllers.GetOne
);
Router.put(
  "/tasks/:id",
  passport.authenticate("jwt", { session: false }),
  Controllers.UpdateOne
);
Router.delete(
  "/tasks/:id",
  passport.authenticate("jwt", { session: false }),
  Controllers.DeleteOne
);

module.exports = Router;
