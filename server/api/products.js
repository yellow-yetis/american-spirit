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
    console.log(req.params.liquorId);
    const liquor = await Liquor.findByPk(req.params.productId);
    res.send(liquor);
  } catch (error) {
    next(error);
  }
});

//Update cartLiquors when logged in user ATC
router.put('/:productId', async (req, res, next) => {
  try {
    console.log("COMING THROUGH PUT ROUTE: ", req.body)
    const userCart = await Cart.findOne({
      where: {
        userId: req.body.userId
      }
    })
    const userCartId = userCart.dataValues.id




  } catch (error) {
    next(error);
  }
})

module.exports = router;
