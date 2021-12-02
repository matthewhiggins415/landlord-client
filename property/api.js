const config = require('../app/config')
const store = require("../app/store.js")

//create a property
const createProperty = () => {
  return $.ajax({
    url: `${config.apiUrl}/property`,
    method: "POST",
    data: data,
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

//get properties
const getAllProperties = () => {
  return $.ajax({
    url: `${config.apiUrl}/property`,
    method: "GET",
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

//get a single property

//edit a property

//delete a property

module.exports = {
  createProperty,
  getAllProperties
}
