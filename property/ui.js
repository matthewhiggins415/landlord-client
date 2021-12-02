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
  console.log(store.properties)
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
