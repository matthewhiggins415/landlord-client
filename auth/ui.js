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
  let token = responseData.user.token
  let email = responseData.user.email
  let id = responseData.user._id

  store.user.token = token
  store.user.email = email
  store.user.id = id

  $("#loginScreen").css("display", "none")
  $("#propertiesScreen").show()
  propEvents.onGetProperties()
  fireMessage("Login Successful!")
  console.log(store)
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
  console.log(store)
  $("#propertiesScreen").hide()
  $("#loginScreen").show()
  fireMessage("Logout Successful!")
  store.user.token = null
  store.user.email = null
  store.user.id = null
 
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
