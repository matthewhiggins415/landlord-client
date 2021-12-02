const config = require('../app/config')

//create a property
const createProperty = () => {
  $.ajax({
    url: `${config.apiUrl}/property`,
    method: "POST",
    data: data,
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

//get properties

//get a single property

//edit a property

//delete a property

module.exports = {
  createProperty
}
