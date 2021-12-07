//This file contains logic for ui functionality
const store = require('../app/store')
const propEvents = require("../property/events")

//Remove all children of an element
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

//Alert Messages
const fireMessage = (message) => {
  let messageElement = document.getElementById("alertMessage")
  removeAllChildNodes(messageElement)
  let p = document.createElement("p")
  messageElement.append(`${message}`, p)

  $("#alertMessage").fadeIn()

  setTimeout(() => {
    $("#alertMessage").fadeOut()
  }, 3000)
}


// ---- Registering ----

//signUpSuccess
const signUpSuccess = (responseData) => {
  console.log(responseData)
  $("#signupScreen").hide()
  $("#loginScreen").css("display", "block")
  fireMessage("Registration Successful!")
}

//signUpFailure
const signUpFailure = (responseData) => {
  console.log(responseData)
  fireMessage("Registration Failed!")
}

// ---- Logging In ----

//Log in success
const logInSuccess = (responseData) => {
  console.log(responseData)
  let token = responseData.user.token
  store.user.token = token
  $("#loginScreen").hide()
  $("#propertiesScreen").show()
  propEvents.onGetProperties()
  fireMessage("Login Successful!")
}

//Log in failure
const logInFailure = (responseData) => {
  console.log(responseData)
  fireMessage("Login Failed!")
}

// ---- LogOut ----

//Logout Success
const logOutSuccess = (responseData) => {
  console.log(responseData)
  $("#propertiesScreen").hide()
  $("#loginScreen").show()
  fireMessage("Logout Successful!")
}

//Logout Failure
const logOutFailure = (responseData) => {
  console.log(responseData)
  fireMessage("Logout Failed!")
}


module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure,
  logOutSuccess,
  logOutFailure
}
