const store = require('../app/store')
const propEvents = require('./events')
const api = require("./api")

const onGetPropertyDetails = (id) => {
  console.log('get property deets run')
  console.log(id)
  api.getASingleProperty(id).then(getAPropertySuccess).catch(getAPropertyFailure)
}

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
        let id = property._id

        let btn = document.createElement("button")
        btn.classList.add("propBtn")
        btn.innerHTML = "details"
        btn.type = "button"
        btn.name = property._id
        btn.addEventListener("click", () => {
          onGetPropertyDetails(btn.name)
          // propEvents.onGetPropertyDetails(btn.name)
        })

        let address = property[key]
        let div = document.createElement("div")
        div.setAttribute('id', 'propertyFromList')
        div.classList.add("property")
        let p = document.createElement("p")
          //load tenant screen info

        propertiesList.append(div)
        div.append(`${address}`, p)
        div.append(btn)
      }
    }
  })
  console.log(property._id)
  $(".property").on("click", () => {
    $("#propertiesScreen").fadeOut()
    $("#tenantScreen").fadeIn()
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
        let id = property._id

        let btn = document.createElement("button")
        btn.classList.add("propBtn")
        btn.innerHTML = "details"
        btn.type = "button"
        btn.name = property._id
        btn.addEventListener("click", () => {
          onGetPropertyDetails(btn.name)
          // propEvents.onGetPropertyDetails(btn.name)
        })

        let address = property[key]
        let div = document.createElement("div")
        div.setAttribute('id', 'propertyFromList')
        div.classList.add("property")
        let p = document.createElement("p")
          //load tenant screen info

        propertiesList.append(div)
        div.append(`${address}`, p)
        div.append(btn)
      }
    }
  })
}

const getPropertiesFailure = (responseData) => {
  console.log(responseData)
}

//GET A SINGLE PROPERTY

const getAPropertySuccess = (responseData) => {
  console.log(responseData)
  $("#propertiesScreen").fadeOut()
  $("#tenantScreen").fadeIn()

  let prevDetails = document.getElementById("propertyDetailsInfoTenantScreen")
  removeAllChildNodes(prevDetails)

  let div = $("#propertyDetailsInfoTenantScreen")

  let p1 = document.createElement("p")
  let p2 = document.createElement("p")
  let p3 = document.createElement("p")
  let p4 = document.createElement("p")

  div.append(`Address: ${responseData.property.address}`, p1)
  div.append(` Number of Units: ${responseData.property.numOfUnits}`, p2)
  div.append(` Total Rent: ${responseData.property.numOfUnits}`, p3)
  div.append(` Rent due the ${responseData.property.numOfUnits}th of each month`, p4)

}

const getAPropertyFailure = (responseData) => {
  console.log(responseData)
}

module.exports = {
  createPropSuccess,
  createPropFailure,
  getPropertiesSuccess,
  getPropertiesFailure,
  getAPropertySuccess,
  getAPropertyFailure
}
