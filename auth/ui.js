//This file contains logic for ui functionality
const store = require('../app/store')

let signUpScreenMessage = $("#signupScreenMessage")

const showAMessage = (message) => {
  signUpScreenMessage.text(`${message}`).css("display", "block")
  setTimeout(function () {
    signUpScreenMessage.empty().css("display", "none")
  }, 3000)
}

//signUpSuccess
const signUpSuccess = (responseData) => {
  console.log(responseData)
  $("#signupScreen").fadeOut()
  $("#loginScreen").fadeIn()
}

//signUpFailure
const signUpFailure = (responseData) => {
  console.log(responseData)
  showAMessage("Sign up failure!")
}


module.exports = {
  signUpSuccess,
  signUpFailure
}
