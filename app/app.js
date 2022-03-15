// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require("../auth/events")
const propEvents = require("../property/events")
const tenantEvents = require('../tenant/events')
const stripeEvents = require('../stripe/events')
const store = require("./store")
// const navEvents = require('../navigation/navigation')

$(() => {
  // your JS code goes here
  $("#landingPage").show()
  $("#setupPage").hide()
  $("#signupScreen").hide()
  $("#loginScreen").hide()
  $("#propertyScreen").hide()
  $("#profileScreen").hide()
  $("#propertiesScreen").hide()
  $("#propertyFormScreen").hide()
  $("#tenantScreen").hide()
  $("#tenantFormScreen").hide()
  $("#tenantInfoScreen").hide()
  $("#confirmDeleteContainer").hide()
  $("#propDetailsEdith4").hide()
  $("#propertyEditFormContainer").hide()
  $("#alertMessage").hide()
  $("#confirmTenantDeleteContainer").hide()
  $("#tenantEditModalScreen").hide()
  $("#propertyEditModalScreen").hide()
  $("#createStripeAccountBtn").hide()
  $("#accountOnboardingBtn").hide()
  $("#editStripeAccountBtn").hide()

  $("#landingPgLoginBtn").on("click", () => {
    $("#landingPage").hide()
    $("#loginScreen").fadeIn()
  })

  $("#landingPgRegisterBtn").on("click", () => {
    $("#landingPage").hide()
    $("#signupScreen").fadeIn()
  })

  //This needs to call api to get all updated props in case prop edited. Same issue as the tenant update.
  $("#tenantScreenBackBtn").on("click", () => {
    $("#tenantScreen").hide()
    $("#propertiesScreen").fadeIn()
  })

  $("#gettingStarted").on("click", () => {
    $("#propertiesScreen").hide()
    $("#setupPage").fadeIn()
    $("#createStripeAccountBtn").fadeIn()
  })

  $("#accountOnboardingBtn").on("click", stripeEvents.onCreateAccountLink)

  $("#setupPageNavBackBtn").on("click", () => {
    $("#setupPage").hide()
    $("#propertiesScreen").fadeIn()
  })


  // Logic for registration, login, logout.
  let signUpForm = $("#signupForm")
  let signInForm = $("#signInForm")
  let logoutBtn = $("#logoutBtn")
  let tenantEditForm = $("#tenantModalEditForm")
  let confirmTenantDelete = $("#yesDeleteTenant")
  let propertyEditForm = $("#propertyEditModalForm")


  let toggleSigninBtn = $("#toLogin")
  toggleSigninBtn.on("click", () => {
    $("#signupScreen").hide()
    $("#loginScreen").fadeIn()
  })

  let toggleToRegister = $("#toRegister")
  toggleToRegister.on("click", () => {
    $("#loginScreen").hide()
    $("#signupScreen").fadeIn()
  })

  signUpForm.on("submit", authEvents.onSignUp)
  signInForm.on("submit", authEvents.onSignIn)
  logoutBtn.on("click", authEvents.onSignOut)
  confirmTenantDelete.on("click", tenantEvents.onDestroyTenant)
  tenantEditForm.on("submit", tenantEvents.onUpdateTenant)
  propertyEditForm.on("submit", propEvents.onEditProperty)

  //Navigate to addPropertyScreen from home
  $("#propertyAddBtn").on("click", () => {
    $("#propertiesScreen").hide()
    $("#propertyFormScreen").show()
  })

  //Navigate back to home from addPropertyScreen
  $("#propertyFormScreenBack").on("click", () => {
    $("#propertiesScreen").fadeIn()
    $("#propertyFormScreen").fadeOut()
    propEvents.onGetProperties()
  })

  //Add a Property functionality.
  $("#addAPropertyForm").on("submit", propEvents.onAddProperty)

  $("#tenantScreenBackBtn").on("click", () => {
    $("#tenantScreen").fadeOut()
    $("#propertiesScreen").fadeIn()
    propEvents.onGetProperties()
  })

  //Navigate to PropertyDetails Page, cannot be added here. needs to be added to where ha element was added to dom. so ui

  //DELETE PROPERTY Functionality
  $("#propDelete").on("click", () => {
    $("#propertyDetailsInfoTenantScreen").hide()
    $("#propDetailsh4").hide()
    $("#propDelete").hide()
    $("#propEditBtn").hide()
    $("#confirmDeleteContainer").fadeIn()
  })

  $("#noDeleteProp").on("click", () => {
    $("#confirmDeleteContainer").hide()
    $("#propertyDetailsInfoTenantScreen").fadeIn()
    $("#propDetailsh4").fadeIn()
    $("#propEditBtn").fadeIn()
    $("#propDelete").fadeIn()
  })

  $("#yesDeleteProp").on("click", () => {
    propEvents.onDeleteProperty()
    $("#confirmDeleteContainer").hide()
    $("#propertyDetailsInfoTenantScreen").fadeIn()
    $("#propDetailsh4").fadeIn()
    $("#propEditBtn").fadeIn()
    $("#propDelete").fadeIn()
  })

  // --- Navigate to tenantFormScreen
  $("#tenantAddBtn").on("click", () => {
    $("#tenantScreen").hide()
    $("#tenantFormScreen").fadeIn()
  })

  // --- Navigate to Back to TenantScreen
  $("#tenantFormScreenBackBtn").on("click", () => {
    $("#tenantFormScreen").hide()
    $("#tenantScreen").fadeIn()
  })

  // --- Navigate to Tenant Details Screen
  $("#tenantDetailsBtn").on("click", () => {
    $("#tenantScreen").hide()
    $("#tenantInfoScreen").fadeIn()
  })

  // Navigate From Tenant Info view Back to property details
  // After a user edits a tenant they hit back to navigate
  // new code below hits backend for up2date list of tenants.
  $("#tenantInfoScreenBackBtn").on("click", () => {
    console.log(store.tenant.property)
    let id = store.tenant.property
    tenantEvents.onReadTenants(id)
    $("#tenantInfoScreen").hide()
    $("#tenantScreen").fadeIn()
    $("#confirmTenantDeleteContainer").hide()
    $("#tenantInfoLeftContainer").show()
    store.tenant = null
  })

  //Navigate to Profile Screen
  $("#PropScreenNavProfileBtn").on("click", () => {
    $("#propertiesScreen").hide()
    $("#profileScreen").fadeIn()
  })

  //Navigate Back from Profile Screen
  $("#profileBackBtn").on("click", () => {
    $("#profileScreen").hide()
    $("#propertiesScreen").fadeIn()
  })

  //We got multiple views within profile screen, hide em.
  $("#profilePasswordsView").hide()

  //then make those views appear when clicked in nav
  $("#profileNavPasswordsBtn").on("click", () => {
    $("#profilePasswordsView").fadeIn()
  })

  //EDIT PROPERTY FUNCTIONALITY
  $("#propEditBtn").on("click", () => {
    $("#propertyEditModalScreen").fadeIn()
  })

  $("#propEditCancel").on("click", () => {
    $("#propertyEditModalScreen").fadeOut()
  })

  let propEditForm = $("#propertyEditForm")
  propEditForm.on("submit", propEvents.onEditProperty)

  $("#editPropSave").on("click", () => {
    // 1. Close Edit Prop Modal
    // 2. Render new data to prop details
    // 3.
    $("#propDetailsEdith4").hide()
    $("#propDetailsh4").fadeIn()
    $("#propDelete").fadeIn()
    $("#propEditBtn").fadeIn()
    $("#propertyEditFormContainer").hide()
    $("#propertyDetailsInfoTenantScreen").fadeIn()
  })

  //This is for creating the tenant
  let createTenantForm = $("#tenantForm")
  createTenantForm.on("submit", tenantEvents.onCreateTenant)


  $("#tenantDeleteBtn").on("click", () => {
    $("#tenantInfoLeftContainer").hide()
    $("#confirmTenantDeleteContainer").fadeIn()
  })

  $("#noDeleteTenant").on("click", () => {
    $("#confirmTenantDeleteContainer").hide()
    $("#tenantInfoLeftContainer").fadeIn()
  })

  $("#tenantEditBtn").on("click", () => {
    $("#tenantEditModalScreen").fadeIn()
  })

  $("#tenantEditModalCancelBtn").on("click", () => {
    $("#tenantEditModalScreen").fadeOut()
    let form = document.getElementById("tenantModalEditForm")
    form.reset()
  })
})
