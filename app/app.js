// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require("../auth/events")
const propEvents = require("../property/events")
const store = require("./store")
// const navEvents = require('../navigation/navigation')

$(() => {
  // your JS code goes here
  $("#signupScreen").show()
  $("#loginScreen").hide()
  $("#propertiesScreen").hide()
  $("#propertyFormScreen").hide()
  $("#tenantScreen").hide()
  $("#tenantFormScreen").hide()
  $("#tenantInfoScreen").hide()
  $("#confirmDeleteContainer").hide()
  $("#propDetailsEdith4").hide()
  $("#propEditCancel").hide()
  $("#propertyEditFormContainer").hide()

  // Logic for registration, login, logout.
  let signUpForm = $("#signupForm")
  let signInForm = $("#signInForm")
  let logoutBtn = $("#logoutBtn")

  let toggleSigninBtn = $("#toLogin")
  toggleSigninBtn.on("click", () => {
    $("#signupScreen").fadeOut()
    $("#loginScreen").fadeIn()
  })

  let toggleToRegister = $("#toRegister")
  toggleToRegister.on("click", () => {
    $("#loginScreen").fadeOut()
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



})
