//We r gonna be combining api calls with ui here.

const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')



//1. For each needed functionality define a function that takes an 'event' as param.
// 2. within that function prevent page refresh
// 3. define the form as a variable from the event
// 4. define a variable that will contain the form data extracted from the form using GetFormData
//5. call the api functionality from api file and pass the form data variable to that function
//6. that api call is a promise so attach .then & .catch logic containing what to do next for the ui.
//7. reset the fields of your form


//onSignUp
const onSignUp = (e) => {
  e.preventDefault()
  let form = e.target
  let formData = getFormFields(form)
  api.signUp(formData).then(ui.signUpSuccess).catch(ui.signUpFailure)
}

//onSignIn
const onSignIn = (e) => {
  e.preventDefault()
  let form = e.target
  let formData = getFormFields(form)
  api.signIn(formData).then(ui.logInSuccess).catch(ui.logInFailure)
}

//onSignOut

//onPasswordChange

module.exports = {
  onSignUp,
  onSignIn
 }
