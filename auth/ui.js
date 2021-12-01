//This file contains logic for ui functionality
const store = require('../app/store')

//Messages for Registration Screen. Registration Success msg will show on login page. So rgstr screen really only shows fail msg.
let signUpScreenMessage = $("#signupScreenMessage")

const showARegisterMessage = (message) => {
  signUpScreenMessage.text(`${message}`).css("display", "block")
  setTimeout(function () {
    signUpScreenMessage.empty().css("display", "none")
  }, 3000)
}

//Login Screen Msg
let signInMessage = $("#signInScreenMessage")

const showALoginMessage = (message) => {
  signInMessage.text(`${message}`).css("display", "block")
  setTimeout(function () {
    signInMessage.empty().css("display", "none")
  }, 3000)
}

// ---- Registering ----

//signUpSuccess
const signUpSuccess = (responseData) => {
  console.log(responseData)
  $("#signupScreen").fadeOut()
  $("#loginScreen").fadeIn()
  showALoginMessage('Registration Successful')
}

//signUpFailure
const signUpFailure = (responseData) => {
  console.log(responseData)
  showARegisterMessage("Sign up failure!")
}


// ---- Logging In ----

//Log in success
const logInSuccess = () => {

}

//Log in failure
const logInFailure = () => {
  console.log(responseData)
  showALoginMessage("Sign in failure!")
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
