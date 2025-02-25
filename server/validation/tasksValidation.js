const isEmpty = require("./isEmpty.js");
const validator = require("validator");

module.exports = function tasksValidation(data) {
  let errors = {};

  /*   data.project = !isEmpty(data.project) ? data.project : "";
  if (!data.project.length != 0) {
    errors.project = "required project";
  }

  data.priority = !isEmpty(data.priority) ? data.priority : "";
  if (!data.priority.length != 0) {
    errors.priority = "required priority";
  }


  
  data.status = !isEmpty(data.status) ? data.status : "";
  if (!data.status) {
    errors.status = "required status";
  }

  data.assigns = !isEmpty(data.assigns) ? data.assigns : "";
  if (!data.assigns) {
    errors.assigns = "required assigns";
  } */

  data.title = !isEmpty(data.title) ? data.title : "";
  if (validator.isEmpty(data.title)) {
    errors.title = "required title";
  }

  data.description = !isEmpty(data.description) ? data.description : "";
  if (validator.isEmpty(data.description)) {
    errors.description = "required description";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
