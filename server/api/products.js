const router = require('express').Router();
const {
  models: { Liquor, cartLiquor, Cart },
} = require('../db');

//get all the liquors
router.get('/', async (req, res, next) => {
  try {
    const products = await Liquor.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

//get a single liquor based on id
router.get('/:productId', async (req, res, next) => {
  try {
    const liquor = await Liquor.findByPk(req.params.productId);
    res.send(liquor);
  } catch (error) {
    next(error);
  }
});

//Update cartLiquors when logged in user ATC
router.put('/:productId', async (req, res, next) => {
<<<<<<< HEAD
=======
  const liquorId = req.body.itemAddedToCart.id
  const liquorQuantity = req.body.itemAddedToCart.liquorQuantity;
  const liquorTotalPrice = req.body.itemAddedToCart.liquorTotalPrice;

>>>>>>> main
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.body.userId
      }
    })
    const userCartId = userCart.dataValues.id

<<<<<<< HEAD
    await userCart.addLiquors(req.body.itemAddedToCart.id, { through: {
      liquorQuantity: req.body.itemAddedToCart.liquorQuantity,
      liquorTotalPrice: req.body.itemAddedToCart.liquorTotalPrice,
      cartId: userCartId,
    }});
    res.send(userCart);
=======
    await userCart.addLiquors(liquorId, { through: {
      liquorQuantity: liquorQuantity,
      liquorTotalPrice: liquorTotalPrice,
      cartId: userCartId,
    }});

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
>>>>>>> main
  } catch (error) {
    next(error);
  }
})

module.exports = router;
