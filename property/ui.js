const store = require('../app/store')
const propEvents = require('./events')
const api = require("./api")
const { property } = require('../app/store')

const onGetPropertyDetails = (id) => {
  api.getASingleProperty(id).then(getAPropertySuccess).catch(getAPropertyFailure)
}
//Remove all children of an element
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

//Create an event message
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

//Create property functionality
const createPropSuccess = (responseData) => {
  store.properties.push(responseData.property)

  $("#propertyFormScreen").fadeOut()
  $("#propertiesScreen").fadeIn()

  fireMessage("New property created!")

  let properties = store.properties

  let propertiesList = document.getElementById("propertiesList")
  removeAllChildNodes(propertiesList)

  properties.forEach(property => {
    for (let key in property) {
      if (key === 'address') {
        let btn = document.createElement("button")
        btn.classList.add("propBtn")
        btn.innerHTML = "details"
        btn.type = "button"
        btn.name = property._id
        btn.addEventListener("click", () => {
          onGetPropertyDetails(btn.name)
        })

        let address = property[key]
        let div = document.createElement("div")
        div.setAttribute('id', 'propertyFromList')
        div.classList.add("property")
        let p = document.createElement("p")

        propertiesList.append(div)
        div.append(`${address}`, p)
        div.append(btn)
      }
    }
  })
}

const createPropFailure = (responseData) => {
  console.log(responseData)
  fireMessage("Failed to create new property")
}

//Get Users Properties functionality
const getPropertiesSuccess = (responseData) => {
  console.log(store)
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
  fireMessage("Failed to get properties!")
}

//GET A SINGLE PROPERTY

const getAPropertySuccess = (responseData) => {
  store.property = null;
  store.property = responseData.property
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
  fireMessage("Failed to get property!")
}

// DELETE A SINGLE PROPERTY

const destroyPropSuccess = (responseData) => {
  //responseData from server is undefined
  let deletedPropId = store.property._id
  let properties = store.properties
  let updatePropertiesArr = properties.filter(prop => prop._id !== deletedPropId)
  store.properties = updatePropertiesArr

  $("#tenantScreen").fadeOut()
  $("#propertiesScreen").show()

  fireMessage("Property Deleted!")

  let remainingProperties = store.properties

  let propertiesList = document.getElementById("propertiesList")
  removeAllChildNodes(propertiesList)

  remainingProperties.forEach(property => {
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

const destroyPropFailure = (responseData) => {
  console.log(responseData)
  fireMessage("Delete Property Failed!")
}


// UPDATE A property
const updatePropSuccess = (responseData) => {
  console.log(responseData)
  store.property = responseData.property

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

  fireMessage("Property Updated!")
}

const updatePropFailure = (responseData) => {
  console.log(responseData)
  fireMessage("Update Failed!")

}

module.exports = {
  createPropSuccess,
  createPropFailure,
  getPropertiesSuccess,
  getPropertiesFailure,
  getAPropertySuccess,
  getAPropertyFailure,
  destroyPropSuccess,
  destroyPropFailure,
  updatePropSuccess,
  updatePropFailure
}
