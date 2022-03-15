const store = require('../app/store')
const api = require('./api')

const onReadTenant = (tenantID) => {
  api.getTenant(tenantID).then(onGetTenantSuccess).catch(onGetTenantFailure)
}

const onReadTenantsAfterDelete = (propId) => {
  api.getTenants(propId).then(getTenantsAfterDeleteSuccess).catch(getTenantsAfterDeleteFailure)
}

const onReadTenantsAfterCreate = (propId) => {
  api.getTenants(propId).then(getTenantsAfterCreateSuccess).catch(getTenantsAfterCreateFailure)

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
  let id = newTenant.property
  onReadTenantsAfterCreate(id)
}

const getTenantsAfterCreateSuccess = (responseData) => {
  let tenantsArr = responseData.tenants

  let tenantsList = document.getElementById("tenantGrid")
  removeAllChildNodes(tenantsList)

  tenantsArr.map( tenant => {
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
    tenantsList.append(tenantDiv)
    tenantDiv.append(`${tenant.firstName}`, tenantP)
    tenantDiv.append(tenantBtn)
  })

  $("#tenantFormScreen").hide()
  $("#tenantScreen").fadeIn()
  fireMessage("Tenant created!")
}

const getTenantsAfterCreateFailure = (responseData) => {
  console.log(responseData)
}

const onCreateTenantFailure = (responseData) => {
  console.log(responseData)
  fireMessage("failed to create tenant")
}


//Get Tenants
const onGetTenantsSuccess = (responseData) => {
  let tenantGrid = document.getElementById("tenantGrid")
  removeAllChildNodes(tenantGrid)
  let tenantsArray = responseData.tenants

  tenantsArray.forEach(tenant => {
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
  $("#tenantScreen").hide()
  $("#tenantInfoScreen").fadeIn()
  store.tenant = responseData.tenant
  let tenant = responseData.tenant
  let tenantDiv = document.getElementById("tenantInformation")
  removeAllChildNodes(tenantDiv)

  let p1 = document.createElement("p")
  let p2 = document.createElement("p")
  let p3 = document.createElement("p")
  let p4 = document.createElement("p")
  let p5 = document.createElement("p")

  tenantDiv.append(`${tenant.firstName} ${tenant.lastName}`, p1)
  tenantDiv.append(`${tenant.phone}`, p2)
  tenantDiv.append(`${tenant.email}`, p3)
  tenantDiv.append(`Rent Amount: $${tenant.rentAmount}`, p4)
  tenantDiv.append(`Rent Date: ${tenant.rentDate}`, p5)
}

const onGetTenantFailure = (responseData) => {
  console.log(responseData)
}

//Update Tenant
const onUpdateTenantSuccess = (responseData) => {
  console.log(responseData)
  fireMessage("Tenant Updated!")
  $("#tenantEditModalScreen").fadeOut()

  let tenant = responseData.tenant
  let tenantDiv = document.getElementById("tenantInformation")
  removeAllChildNodes(tenantDiv)

  let p1 = document.createElement("p")
  let p2 = document.createElement("p")
  let p3 = document.createElement("p")
  let p4 = document.createElement("p")
  let p5 = document.createElement("p")

  tenantDiv.append(`${tenant.firstName} ${tenant.lastName}`, p1)
  tenantDiv.append(`${tenant.phone}`, p2)
  tenantDiv.append(`${tenant.email}`, p3)
  tenantDiv.append(`Rent Amount: $${tenant.rentAmount}`, p4)
  tenantDiv.append(`Rent Date: ${tenant.rentDate}`, p5)
}

const onUpdateTenantFailure = (responseData) => {
  console.log(responseData)
}

//Delete Tenant
const onDeleteTenantSuccess = (responseData) => {
  let propId = store.tenant.property
  onReadTenantsAfterDelete(propId)
  $("#confirmTenantDeleteContainer").hide()
  $("#tenantInfoLeftContainer").show()
}

const onDeleteTenantFailure = (responseData) => {
  console.log(responseData)
}

const getTenantsAfterDeleteSuccess = (responseData) => {
  console.log('shit worked', responseData)

  let tenantGrid = document.getElementById("tenantGrid")
  removeAllChildNodes(tenantGrid)

  let tenantsArray = responseData.tenants

  tenantsArray.forEach(tenant => {
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

  $("#tenantInfoScreen").hide()
  $("#tenantScreen").fadeIn()
  fireMessage("Tenant removed!")
}

const getTenantsAfterDeleteFailure = (responseData) => {
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
