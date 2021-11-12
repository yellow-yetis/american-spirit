const router = require('express').Router();
const {
  models: { Liquor },
} = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingmiddleware');

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

//POST create new product
router.post('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const { name, category, region, description, price, ABV, imageUrl, stock } =
      req.body;
    res.json(await Liquor.create(req.body));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// PUT /api/products/:productId *update existing product*
router.put('/:productId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const product = await Liquor.findByPk(req.params.productId);
    const { name, category, region, description, price, ABV, imageUrl, stock } =
      req.body;
    res.json(await product.update(req.body));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// DELETE /api/products/:productId *remove existing product*
router.delete('/:productId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const product = await Liquor.findByPk(req.params.productId);
    await product.destroy();
    res.json(product);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
