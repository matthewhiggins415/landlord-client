import {onSignUp} from './auth/events'

let signupScreen = document.getElementById("signupScreen")
let loginScreen = document.getElementById("loginScreen")
let propertiesScreen = document.getElementById("propertiesScreen")
let propertyFormScreen = document.getElementById("propertyFormScreen")
let tenantScreen = document.getElementById("tenantScreen")
let tenantFormScreen = document.getElementById("tenantFormScreen")
let tenantInfoScreen = document.getElementById("tenantInfoScreen")


// signupScreen.style.display = "block"
loginScreen.style.display = "none"
propertiesScreen.style.display = "none"
propertyFormScreen.style.display = "none"
tenantScreen.style.display = "none"
tenantFormScreen.style.display = "none"
tenantInfoScreen.style.display = "none"

// Elements of registration view
let signUpForm = document.getElementById("signupForm")

// const submitRegistration = (e) => {
//   e.preventDefault()
//   console.log('click working')
//   // authEvents.onSignUp(e)
//   // console.log(getFormFields(signUpForm))
// }

signUpForm.addEventListener("submit", onSignUp)
