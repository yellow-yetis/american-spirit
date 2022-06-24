
# American Spirit
## A fully functioning mock e-commerce application revolving around selling liquor products using the PERN stack
[Click here for the live version](https://american-spirit.herokuapp.com/)

![](https://user-images.githubusercontent.com/32605566/175239095-bf600de5-6bbf-4e37-bc7a-76f932629afe.gif)


## Technologies
- HTML5
- CSS3
- JavaScript
- React
- Redux
- Sequelize
- Express
- Node.js
- PostgreSQL

## Features

## User Authentication
![](https://user-images.githubusercontent.com/32605566/175450270-bbda8351-f355-45cb-9ebc-7907ce0afa29.gif)
### User is able to navigate on the website and purchase the products after being logged in as well as a guest. Authenticated users has access to the Homepage with categorized list of products, current specials and additional informational links. Admin user is able to add, edit, delete the products in the database.

#### username: cody password: 123

## Product description
![](https://user-images.githubusercontent.com/32605566/175450395-d4d04cfa-27ee-4e18-a2cc-9fd36915ab6f.gif)
### After selecting the product, user has its detailed description and has ability to choose the quantity of the liquor to be added to the shopping card. Whether the user chooses the quantity of the product <= 0 or more than it is in the database, user will get an error message

## Shopping Card
![](https://user-images.githubusercontent.com/32605566/175450863-861586a7-0f1d-4711-8d96-612156a77a05.gif)
### User is able to modify the quantity of the liquor in the shopping card as well as delete it if necessary. The total sum of money to be paid is also updated according the quantity of the products in the shopping card.


## Code snippet
```
handleChange(e) {
    if (e.target.value <= 0) {
      this.setState({
        quantityToBuy: 1,
        error: 'Only product quantities of 1 or greater are allowed',
      });
    } else if (e.target.value > this.props.product.stock) {
      this.setState({
        error:
          'We do not have that many products in stock, please lower quantity',
      });
    } else {
      this.setState({
        quantityToBuy: parseInt(e.target.value),
        error: '',
      });
    }
  }

```
### The code above ensures that the user is not able to add quantity of the product <= 0 and not able to add more products to the shooping card than its available in the database.

## Installation
### To get a local copy up and running follow these steps:
- Clone repository:
```
https://github.com/yellow-yetis/american-spirit.git
```
- Install packages:
```
npm install
```
- Seed the database:
```
npm run seed
```
- Run app in developement mode:
```
npm run start:dev
```
- Open http://localhost:8080 to view it in your browser.


## Authors:

- Christian Anderson - [https://github.com/somecallmehans](https://github.com/somecallmehans)
- Sean Hagstrom - [https://github.com/seanhagstrom](https://github.com/seanhagstrom)
- Devarat Patel - [https://github.com/devaratpatel](https://github.com/devaratpatel)
- Ilfir Yakupov - [https://github.com/philsmirnoff](https://github.com/philsmirnoff)





