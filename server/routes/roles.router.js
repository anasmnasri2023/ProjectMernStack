const express = require("express");
const Router = express();
const Controllers = require("../controllers/roles");

Router.post("/roles", Controllers.Add);
Router.get("/roles", Controllers.GetAll);
Router.get("/roles/:id", Controllers.GetOne);
Router.put("/roles/:id", Controllers.UpdateOne);
Router.delete("/roles/:id", Controllers.DeleteOne);

module.exports = Router;
