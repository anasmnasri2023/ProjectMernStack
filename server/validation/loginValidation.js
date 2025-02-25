const isEmpty = require('./isEmpty.js')
        const validator = require('validator')

        module.exports = function loginValidation(data){
        let errors = {};

       data.email = !isEmpty(data.email) ? data.email : ''
       if(validator.isEmpty(data.email)){
       errors.email = 'required email'
       }
      

       data.password = !isEmpty(data.password) ? data.password : ''
       if(validator.isEmpty(data.password)){
       errors.password = 'required password'
       }
      
return {
         errors,
         isValid: isEmpty(errors)
         }
        }
