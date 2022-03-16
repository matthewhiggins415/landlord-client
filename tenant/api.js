const config = require('../app/config')
const store = require("../app/store.js")

const createTenant = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/tenant`,
    method: "POST",
    data: data,
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

const getTenants = (id) => {
  return $.ajax({
    url: `${config.apiUrl}/tenants/${id}`,
    method: "GET",
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

const getTenant = (id) => {
  return $.ajax({
    url: `${config.apiUrl}/tenant/${id}`,
    method: 'GET',
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateTenant = (formData) => {
  let tenantID = store.tenant._id
  return $.ajax({
    url: `${config.apiUrl}/tenant/${tenantID}`,
    method: "PATCH",
    data: formData,
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

const deleteTenant = () => {
  let id = store.tenant._id
  return $.ajax({
    url: `${config.apiUrl}/tenant/${id}`,
    method: "DELETE",
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
   createTenant,
   getTenant,
   getTenants,
   updateTenant,
   deleteTenant
}
