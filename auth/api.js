//Make all Api calls here.

import store from '../app/store'
import config from '../app/config'

//signup
const signUp = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/signup`,
    method: "POST",
    data: data
  })
}


//login


//logout


//changePW

module.exports = { signUp }
