// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require("../auth/events")

$(() => {
  // your JS code goes here
  $("#signupScreen").show()
  $("#loginScreen").hide()
  $("#propertiesScreen").hide()
  $("#propertyFormScreen").hide()
  $("#tenantScreen").hide()
  $("#tenantFormScreen").hide()
  $("#tenantInfoScreen").hide()
  // Elements of registration view
  let signUpForm = $("#signupForm")
  let signInForm = $("#signInForm")
  let logoutBtn = $("#logoutBtn")

  signUpForm.on("submit", authEvents.onSignUp)
  signInForm.on("submit", authEvents.onSignIn)
  logoutBtn.on("click", authEvents.onSignOut)


  // const submitRegistration = (e) => {
  //   e.preventDefault()
  //   console.log('click working')
  //   // authEvents.onSignUp(e)
  //   // console.log(getFormFields(signUpForm))
  // }

  // signUpForm.addEventListener("submit", onSignUp)
})
