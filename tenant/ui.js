const store = require('../app/store')
const api = require('./api')
const ui = require("./ui")

const onReadTenant = (tenantID) => {
  api.getTenant(tenantID).then(onGetTenantSuccess).catch(onGetTenantFailure)
}

//Remove all children of an element.. used by message
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

//message
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


//Create tenant
const onCreateTenantSuccess = (responseData) => {
  let newTenant = responseData.tenant
  store.tenants.push(newTenant)
  console.log(store)

  store.tenants.forEach( tenant => {
    for (let key in tenant) {
      console.log(key)
    }
  })

}

const onCreateTenantFailure = (responseData) => {
  console.log(responseData)
  fireMessage("failed to create tenant")
}


//Get Tenants
const onGetTenantsSuccess = (responseData) => {
  removeAllChildNodes(tenantGrid)
  let tenantsArray = responseData.tenants

  tenantsArray.forEach(tenant => {
    let tenantGrid = document.getElementById("tenantGrid")

    let tenantDiv = document.createElement("div")
    tenantDiv.classList.add("tenantDiv")
    let tenantP = document.createElement("p")

    let tenantBtn = document.createElement("button")
    tenantBtn.name = tenant._id
    tenantBtn.classList.add("tenantBtn")
    tenantBtn.setAttribute('id', 'tenantDetailsBtn')
    tenantBtn.innerHTML = `Details`
    tenantBtn.addEventListener("click", () => {
      onReadTenant(tenantBtn.name)
    })
    tenantGrid.append(tenantDiv)
    tenantDiv.append(`${tenant.firstName}`, tenantP)
    tenantDiv.append(tenantBtn)
  })
}

const onGetTenantsFailure = (responseData) => {
  console.log(responseData)
}


//Get Tenant
const onGetTenantSuccess = (responseData) => {
  console.log(`Successful request for tenant with id: `, responseData.tenant)

}

const onGetTenantFailure = (responseData) => {
  console.log(`Tenant request fucked up`, responseData)
}

//Update Tenant
const onUpdateTenantSuccess = (responseData) => {
  console.log(responseData)
}

const onUpdateTenantFailure = (responseData) => {
  console.log(responseData)
}

//Delete Tenant
const onDeleteTenantSuccess = (responseData) => {
  console.log(responseData)
}

const onDeleteTenantFailure = (responseData) => {
  console.log(responseData)
}

module.exports = {
  onCreateTenantSuccess,
  onCreateTenantFailure,
  onGetTenantsSuccess,
  onGetTenantsFailure,
  onGetTenantSuccess,
  onGetTenantFailure,
  onUpdateTenantSuccess,
  onUpdateTenantFailure,
  onDeleteTenantSuccess,
  onDeleteTenantFailure
}
