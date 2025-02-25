const isEmpty = require("./isEmpty.js");
const validator = require("validator");

module.exports = function usersValidation(data) {
  let errors = {};

  data.fullName = !isEmpty(data.fullName) ? data.fullName : "";
  if (validator.isEmpty(data.fullName)) {
    errors.fullName = "required fullName";
  }

  data.email = !isEmpty(data.email) ? data.email : "";
  if (validator.isEmpty(data.email)) {
    errors.email = "required email";
  }

  data.roles = !isEmpty(data.roles) ? data.roles : "";
  if (!data.roles) {
    errors.roles = "required roles";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
