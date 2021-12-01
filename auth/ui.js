//This file contains logic for ui functionality
const store = require('../app/store')

//signUpSuccess
const signUpSuccess = (responseData) => {
  console.log(responseData)
}

//signUpFailure
const signUpFailure = (responseData) => {
  console.log(responseData)
}


module.exports = {
  signUpSuccess,
  signUpFailure
}
