const api = require("./api")
const ui = require("./ui")
const store = require("../app/store")

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
  console.log("getting properties")
  api.getAllProperties()
  .then(ui.getPropertiesSuccess)
  .catch(ui.getPropertiesFailure)
}


//Get A Property's Details
const onGetPropertyDetails = (id) => {
  console.log(`${id}`)
  // api.getASingleProperty(id).then(ui.getAPropertySuccess).catch(ui.getAPropertyFailure)
}

const onDeleteProperty = () => {
  let id = store.property._id
  api.deleteASingleProperty(id).then(ui.destroyPropSuccess).catch(ui.destroyPropFailure)
}

module.exports = {
  onAddProperty,
  onGetProperties,
  onGetPropertyDetails,
  onDeleteProperty
}
