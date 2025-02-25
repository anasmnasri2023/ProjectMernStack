const isEmpty = require("./isEmpty.js");

module.exports = function imagesValidation(req) {
  let errors = {};
  req.file = !isEmpty(req.file) ? req.file : "";

  if (!req.file.filename) {
    errors.picture = "Required image";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
