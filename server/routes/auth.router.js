const express = require("express");
const Router = express();
const Login = require("../controllers/auth/Login");
const { ChangePassword } = require("../controllers/auth/ChangePassword");
const passport = require("passport");
const { CheckMail, ResetPassword } = require("../controllers/auth/Reset");

Router.post("/login", Login);
Router.post(
  "/change_password",
  passport.authenticate("jwt", { session: false }),
  ChangePassword
);
Router.post("/__check_mail", CheckMail);
Router.post("/__reset_password", ResetPassword);

module.exports = Router;
