const { properties } = require('../app/store')
const store = require('../app/store')

//Create property functionality
const createPropSuccess = (responseData) => {
  console.log(responseData)
}

const createPropFailure = (responseData) => {
  console.log(responseData)
}

//Get Users Properties functionality
const getPropertiesSuccess = (responseData) => {
  store.properties = responseData.properties
  let properties = store.properties
  console.log(properties)
  console.log(properties.length)

  //Grab the parent
  //Loop through the store.properties array
  //create a child for parent element on every loop

  let propertiesList = document.getElementById("propertiesList")


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
