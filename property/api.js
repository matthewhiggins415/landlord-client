const config = require('../app/config')
const store = require("../app/store.js")

//create a property
const createProperty = (data) => {
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
const getASingleProperty = (id) => {
  return $.ajax({
    url: `${config.apiUrl}/property/${id}`,
    method: "GET",
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

//edit a property
const updateASingleProperty = (formData) => {
  let id = store.property._id
  console.log(id, "update api call made")
}

//delete a property
const deleteASingleProperty = (id) => {
  console.log(`id of ${id} received by api`)
  return $.ajax({
    url: `${config.apiUrl}/property/${id}`,
    method: "DELETE",
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createProperty,
  getAllProperties,
  getASingleProperty,
  deleteASingleProperty,
  updateASingleProperty
}
