const router = require('express').Router();
const {
  models: { Liquor, cartLiquor, Cart },
} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.headers.userid
      }
    });
    const userCartId = userCart.dataValues.id;

    const productsInCart = await userCart.getLiquors({cartId: userCartId})

    res.json(productsInCart);
  } catch (error) {
    next(error);
  }
})

//Potentially same as ATC
router.put('/', async (req, res, next) => {
  const liquorId = req.body.updatedProduct.id;
  const liquorQuantity = req.body.updatedProduct.cartLiquor.liquorQuantity;
  const liquorTotalPrice = req.body.updatedProduct.cartLiquor.liquorTotalPrice;
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.body.userId
      }
    });
    const userCartId = userCart.dataValues.id

    await userCart.addLiquors(liquorId, {
      through: {
        liquorQuantity: liquorQuantity,
        liquorTotalPrice: liquorTotalPrice,
        cartId: userCartId
      },
    });

    const liquorSum = await cartLiquor.sum('liquorQuantity', {
      where: {
        cartId: userCartId
      }
    })

    const priceSum = await cartLiquor.sum('liquorTotalPrice', {
      where: {
        cartId: userCartId
      }
    })

    //Update cart table with cartLiquors totals
    Cart.update({
      totalQuantity: liquorSum,//total quantity sum
      totalPrice: priceSum//total price sum
    }, {
      where: {
        id: userCartId
      }
    })

    const liquors = await userCart.getLiquors()

    res.send(liquors);
  } catch (error) {
    next(error)
  }
})

router.get('/totals', async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.headers.userid
      }
    });
    res.send(userCart);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
