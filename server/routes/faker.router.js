const express = require("express");
const Router = express();
const { faker } = require("@faker-js/faker");
const usersModel = require("../models/users");
const FakeUser = async (req, res) => {
  for (let index = 0; index < 10; index++) {
    const user = {
      fullName: faker.name.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      picture: faker.image.avatar(),
      password: "azerty",
      roles: ["ENGINEER"],
    };
    await usersModel.create(user);
  }
  return res.status(201).json({ message: "Data loaded" });
};

Router.post("/fake-users", FakeUser);

module.exports = Router;
