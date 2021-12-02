const api = require("./api")
const ui = require("./ui")
const getFormFields = require('../lib/get-form-fields')

//Add a property event
const addProperty = (e) => {
  e.preventDefault()
  let form = e.target
  let formData = getFormFields(form)
  api.createProperty(formData).then(ui.createPropSuccess).catch(ui.createPropFailure)
}

module.exports = {
  addProperty
}
