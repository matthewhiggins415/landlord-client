let getFormFields = require("./lib/get-form-fields")


let signupScreen = document.getElementById("signup")
let loginScreen = document.getElementById("loginScreen")
let propertyFormScreen = document.getElementById("propertyFormScreen")
let propertyForm = document.getElementById("propertyForm")
let tenantFormScreen = document.getElementById("tenantFormScreen")
let tenantScreen = document.getElementById("tenantScreen")
let tenantInfoScreen = document.getElementById("tenantInfoScreen")


// signupScreen.style.display = "none"
loginScreen.style.display = "none"
propertyScreen.style.display = "none"
propertyFormScreen.style.display = "none"
tenantScreen.style.display = "none"
tenantFormScreen.style.display = "none"
tenantInfoScreen.style.display = "none"

//Elements of registration view
let signUpForm = document.getElementById("signupForm")
let signUpBtn = document.getElementById("signUpBtn")

const submitRegistration = (e) => {
  e.preventDefault()
  console.log('click working')
  // console.log(getFormFields(signUpForm))
}

signUpBtn.addEventListener('click', submitRegistration())
