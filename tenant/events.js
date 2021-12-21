const api = require("./api")
const ui = require("./ui")
const store = require("../app/store")


const onCreateTenant = (e) => {
  e.preventDefault()
  let property = store.property._id
  let form = e.target
  let firstName = form.elements["firstName"].value
  let lastName = form.elements["lastName"].value
  let email = form.elements["email"].value
  let phone = form.elements["phone"].value
  let rentDate = form.elements["rentDate"].value
  let rentAmount = form.elements["rentAmount"].value
  let formData = {
    tenant: {
      property,
      firstName,
      lastName,
      email,
      phone,
      rentDate,
      rentAmount
    }
  }
  api.createTenant(formData).then(ui.onCreateTenantSuccess).catch(ui.onCreateTenantFailure)
  form.reset()
}

//Get all tenants belonging to a landlord
const onReadTenants = (propertyID) => {
  api.getTenants(propertyID).then(ui.onGetTenantsSuccess).catch(ui.onGetTenantsFailure)
}

//on read tenant moved to tenant ui.js

const onUpdateTenant = (e) => {
  e.preventDefault()
  let property = store.property._id
  let form = e.target
  let firstName = form.elements["firstName"].value
  let lastName = form.elements["lastName"].value
  let email = form.elements["email"].value
  let phone = form.elements["phone"].value
  let rentDate = form.elements["rentDate"].value
  let rentAmount = form.elements["rentAmount"].value
  let formData = {
    tenant: {
      property,
      firstName,
      lastName,
      email,
      phone,
      rentDate,
      rentAmount
    }
  }
  api.updateTenant(formData)
  .then(ui.onUpdateTenantSuccess)
  .catch(ui.onUpdateTenantFailure)

  form.reset()
}

const onDestroyTenant = () => {
  api.deleteTenant().then(ui.onDeleteTenantSuccess).catch(ui.onDeleteTenantFailure)
}


module.exports = {
  onCreateTenant,
  onReadTenants,
  onUpdateTenant,
  onDestroyTenant
}
