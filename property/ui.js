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
        let address = property[key]
        let div = document.createElement("div")
        div.setAttribute('id', 'propertyFromList')
        div.classList.add("property")
        let p = document.createElement("p")
        let button = document.createElement("button")
        button.classList.add("propBtn")

        propertiesList.append(div)
        div.append(`${address}`, p)

        $("#propertyFromList").on("click", () => {
          console.log("clicked")
          $("#propertiesScreen").fadeOut()
          $("#tenantScreen").fadeIn()
        })
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
        //create the div
        //add class of "property"
        //add the p element to the div
        //add the button element with name of "edit" to div
        //Add class of "propBtn" to button element
        // let p = document.createElement("p")
        // propertiesList.append(`${address}`, p)
        let address = property[key]
        let div = document.createElement("div")
        div.setAttribute('id', 'propertyFromList')
        div.classList.add("property")
        let p = document.createElement("p")
        let button = document.createElement("button")
        button.classList.add("propBtn")
          //load tenant screen info

          propertiesList.append(div)
          div.append(`${address}`, p)
        }
      }
    })


      $(".property").on("click", () => {
        $("#propertiesScreen").fadeOut()
        $("#tenantScreen").fadeIn()
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
