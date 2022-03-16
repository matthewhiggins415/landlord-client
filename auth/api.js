//Make all Api calls here.
const config = require('../app/config')
const store = require('../app/store')

//signup
const signUp = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: "POST",
    data: data
  })
}

//login
const signIn = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: "POST",
    data: data
  })
}

//logout
const signOut = () => {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: "DELETE",
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}


//changePW

module.exports = {
  signUp,
  signIn,
  signOut
 }
