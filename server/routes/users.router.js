const express = require("express");
const Router = express();
const Controllers = require("../controllers/users");
const Register = require("../controllers/auth/Register");
const { Upload } = require("../controllers/images");
const passport = require("passport");

Router.post("/register", Register);
Router.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  Controllers.GetAll
);
Router.get(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  Controllers.GetOne
);
Router.put(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  Controllers.UpdateOne
);
Router.put(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  Controllers.UpdateProfile
);
Router.delete(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  Controllers.DeleteOne
);

/* add images */
Router.post(
  "/images",
  passport.authenticate("jwt", { session: false }),
  Upload
);

/* update roles */
Router.post(
  "/users/:id/roles",
  passport.authenticate("jwt", { session: false }),
  Controllers.UpdateRole
);

/* delete roles */
Router.delete(
  "/users/:id/roles",
  passport.authenticate("jwt", { session: false }),
  Controllers.DeleteRole
);

module.exports = Router;
