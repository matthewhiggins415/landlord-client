const store = {
  user: {
    name: null,
    id: null,
    token: null
  },
  properties: [],
  property: null,
  tenants: [],
  tenant: null, 
  stripeIsCreated: false, 
  stripeIsActive: false, 
  stripeAccountId: null
}

module.exports = store
