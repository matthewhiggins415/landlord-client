const api = require("./api")
const ui = require("./ui")
const getFormFields = require('../lib/get-form-fields')



//Add a property event
const onAddProperty = (e) => {
  e.preventDefault()
  let form = e.target
  let address = form.elements["address"].value
  let numOfUnits = form.elements["numOfUnits"].value
  let totalRent = form.elements["totalRent"].value
  let DayRentDue = form.elements["DayRentDue"].value
  let formData = {
    property: {
      address,
      numOfUnits,
      totalRent,
      DayRentDue
    }
  }
  api.createProperty(formData).then(ui.createPropSuccess).catch(ui.createPropFailure)
  form.reset()
}

//Get a Users properties
const onGetProperties = () => {
  api.getAllProperties()
  .then(ui.getPropertiesSuccess)
  .catch(ui.getPropertiesFailure)
}

module.exports = {
  onAddProperty,
  onGetProperties
}
