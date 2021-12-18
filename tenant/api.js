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

const updateTenant = () => {

}


const deleteTenant = () => {

}

module.exports = {
   createTenant,
   getTenant,
   getTenants,
   updateTenant,
   deleteTenant
}
