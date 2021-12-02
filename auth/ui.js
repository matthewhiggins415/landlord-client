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
  $("#signupScreen").hide()
  $("#loginScreen").css("display", "block")
  // showALoginMessage('Registration Successful')
}

//signUpFailure
const signUpFailure = (responseData) => {
  console.log(responseData)
  // showARegisterMessage("Sign up failure!")
}

// ---- Logging In ----

//Log in success
const logInSuccess = (responseData) => {
  console.log(responseData)
  let token = responseData.user.token
  store.user.token = token
  $("#loginScreen").hide()
  $("#propertiesScreen").show()
  //show a message on properties screen
}

//Log in failure
const logInFailure = (responseData) => {
  console.log(responseData)
  // showALoginMessage("Sign in failure!")
}

// ---- LogOut ----

//Logout Success
const logOutSuccess = (responseData) => {
  console.log(responseData)
  $("#propertiesScreen").hide()
  $("#loginScreen").show()
  //message "signout success"
}

//Logout Failure
const logOutFailure = (responseData) => {
  console.log(responseData)
}


module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure,
  logOutSuccess,
  logOutFailure
}
