// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require("../auth/events")
const propEvents = require("../property/events")
const tenantEvents = require('../tenant/events')
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
  $("#propEditCancel").hide()
  $("#propertyEditFormContainer").hide()
  $("#alertMessage").hide()

  $("#landingPgLoginBtn").on("click", () => {
    $("#landingPage").hide()
    $("#loginScreen").fadeIn()
  })

  $("#landingPgRegisterBtn").on("click", () => {
    $("#landingPage").hide()
    $("#signupScreen").fadeIn()
  })

  $("#tenantScreenBackBtn").on("click", () => {
    $("#tenantScreen").hide()
    $("#propertiesScreen").fadeIn()
  })
  //we want to hide the step to add tenant bankAccount information. We will add this on each tenants Individual page.

  $("#stepThreeBtn").on("click", () => {

  })

  $("#gettingStarted").on("click", () => {
    $("#propertiesScreen").hide()
    $("#setupPage").fadeIn()
  })

  $("#setupPageNavBackBtn").on("click", () => {
    $("#setupPage").hide()
    $("#propertiesScreen").fadeIn()
  })


  // Logic for registration, login, logout.
  let signUpForm = $("#signupForm")
  let signInForm = $("#signInForm")
  let logoutBtn = $("#logoutBtn")

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

  //Navigate Back
  $("#tenantInfoScreenBackBtn").on("click", () => {
    $("#tenantInfoScreen").hide()
    $("#tenantScreen").fadeIn()
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
    $("#propDetailsh4").hide()
    $("#propDetailsEdith4").fadeIn()
    $("#propDelete").hide()
    $("#propEditBtn").hide()
    $("#propEditCancel").fadeIn()
    $("#propertyDetailsInfoTenantScreen").hide()
    $("#propertyEditFormContainer").fadeIn()
  })

  $("#propEditCancel").on("click", () => {
    $("#propDetailsEdith4").hide()
    $("#propDetailsh4").fadeIn()
    $("#propEditCancel").hide()
    $("#propDelete").fadeIn()
    $("#propEditBtn").fadeIn()
    $("#propertyEditFormContainer").hide()
    $("#propertyDetailsInfoTenantScreen").fadeIn()
  })

  let propEditForm = $("#propertyEditForm")
  propEditForm.on("submit", propEvents.onEditProperty)

  $("#editPropSave").on("click", () => {
    $("#propDetailsEdith4").hide()
    $("#propDetailsh4").fadeIn()
    $("#propEditCancel").hide()
    $("#propDelete").fadeIn()
    $("#propEditBtn").fadeIn()
    $("#propertyEditFormContainer").hide()
    $("#propertyDetailsInfoTenantScreen").fadeIn()
  })

  //This is for creating the tenant
  let createTenantForm = $("#tenantForm")
  createTenantForm.on("submit", tenantEvents.onCreateTenant)



})
