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


//logout


//changePW

module.exports = { signUp }
