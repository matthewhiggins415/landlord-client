# easyRent

This is the frontend of my fullstack project.

### Project's Purpose:
This project is a platform for landlords and tenants to exchange money automatically. Landlords can organize both properties and tenants in one simple environment, landlords can add payment methods and preferences for each individual tenant of each property. Landlords can automatically collect rents by charging the debit/credit cards of tenants. 

### Benefits for tenants: 
1. Never be paying fees for late rent and can 
2. Use credit card to build credit and get points.

### Benefits for landlords:
2. Automatically collect rents on time ever month.
3. Organize your investment properties
4. Organize your tenants

### Wireframes:
<img src="https://user-images.githubusercontent.com/67120920/159135751-a0914eca-033b-42fc-9b75-212c41a5504b.jpg" alt="general wireframe" style="width:550px; height:auto; margin:0 auto;"/>
[Profile View Wireframe](https://imgur.com/gallery/yiWUYet?raw=true)
[Tenant Details View Wireframe](https://imgur.com/gallery/zuLUzVO?raw=true)


### Landlord User Story:
[Landlord User Story](https://imgur.com/gallery/P8Y3Zyk?raw=true)

### How it works Technically:
1. A user signs up as a landlord through the registration form.
2. The registration form calls the backend route creating a new user in the Mongo Database
3. The newly registered user is directed to the login page where credentials are verified in backend and if valid are returned with token
4. Token gives user access to otherwise restricted pages like adding properties, tenants, profile screen, etc. 
5. All resources are CRUDable through backend api. 

### Technologies Used:
1. html
2. css
3. javascript
4. jquery

### Link to deployed site:
[easyRent](https://matthewhiggins415.github.io/landlord-client/) 
