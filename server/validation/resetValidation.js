const isEmpty = require("./isEmpty.js");
const validator = require("validator");

module.exports = function resetValidation(data) {
  let errors = {};

  data.password = !isEmpty(data.password) ? data.password : "";
  if (validator.isEmpty(data.password)) {
    errors.password = "required password";
  }

  data.confirm = !isEmpty(data.confirm) ? data.confirm : "";
  if (!validator.equals(data.password, data.confirm)) {
    errors.confirm = "passwords not matches";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
