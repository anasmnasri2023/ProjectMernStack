const isEmpty = require("./isEmpty.js");
const validator = require("validator");

module.exports = function profileValidation(data) {
  let errors = {};

  data.fullName = !isEmpty(data.fullName) ? data.fullName : "";
  if (validator.isEmpty(data.fullName)) {
    errors.fullName = "required fullName";
  }

  data.email = !isEmpty(data.email) ? data.email : "";
  if (validator.isEmpty(data.email)) {
    errors.email = "required email";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
