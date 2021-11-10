const router = require('express').Router();
const {
  models: { User, Cart, cartLiquor, Liquor },
} = require('../db');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
//GET ROUTE - ALL PRODUCTS IN THE USERS CART

router.get('/:id/cart', async (req, res, next) => {
  try {
    // maybe we should spit this up some
    const usersCart = await Cart.findOne({
      attributes: {
        where: {
          userId: req.params.id,
        },
      },
    });

    const cartProducts = await cartLiquor.findAll({
      where: {
        cartId: usersCart.id,
      },
      // include: Liquor,
    });
    // console.log('This is what I am looking for: ', cartProducts);
    // cartProducts will give us an array that looks similar to this:
    //   [
    //     {
    //         "cartQuantity": 2,
    //         "cartPrice": 5,
    //         "createdAt": "2021-11-10T04:17:23.653Z",
    //         "updatedAt": "2021-11-10T04:17:23.653Z",
    //         "cartId": 1,
    //         "liquorId": 1
    //     },
    //     {
    //         "cartQuantity": 5,
    //         "cartPrice": 10.95,
    //         "createdAt": "2021-11-10T05:38:32.677Z",
    //         "updatedAt": "2021-11-10T05:38:32.677Z",
    //         "cartId": 1,
    //         "liquorId": 2
    //     }
    // ]
    // **** Then we can isolate the liquorId's and dispatch to get products(). ***
    res.json(cartProducts);

    // const cartProducts = Cart.findAll({
    //   where: {
    //     userId: req.params.id,
    //   },
    //   include: cartLiquor,
    // });
    // res.json(cartProducts);
  } catch (err) {
    next(err);
  }
});

//PUT ROUTE - EDIT QTY IN USER CART FOR PRODUCTS
