const store = require('../app/store')

//Remove all children of an element
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

//Create property functionality
const createPropSuccess = (responseData) => {
  store.properties.push(responseData.property)

  $("#propertyFormScreen").fadeOut()
  $("#propertiesScreen").fadeIn()

  let properties = store.properties

  let propertiesList = document.getElementById("propertiesList")
  removeAllChildNodes(propertiesList)

  properties.forEach(property => {
    for (let key in property) {
      if (key === 'address') {
        let p = document.createElement("p")
        let address = property[key]
        propertiesList.append(`${address}`, p)
      }
    }
  })
}

const createPropFailure = (responseData) => {
  console.log(responseData)
}

//Get Users Properties functionality
const getPropertiesSuccess = (responseData) => {
  store.properties = responseData.properties
  let properties = store.properties

  let propertiesList = document.getElementById("propertiesList")
  removeAllChildNodes(propertiesList)

  properties.forEach(property => {
    for (let key in property) {
      if (key === 'address') {
        let p = document.createElement("p")
        let address = property[key]
        propertiesList.append(`${address}`, p)
      }
    }
  })
}

const getPropertiesFailure = (responseData) => {
  console.log(responseData)
}

module.exports = {
  createPropSuccess,
  createPropFailure,
  getPropertiesSuccess,
  getPropertiesFailure
}
