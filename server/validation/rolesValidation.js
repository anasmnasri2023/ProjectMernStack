const isEmpty = require("./isEmpty.js");
const validator = require("validator");

module.exports = function rolesValidation(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  if (validator.isEmpty(data.name)) {
    errors.name = "required name";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
