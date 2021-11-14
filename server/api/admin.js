const router = require('express').Router();
const {
  models: { Liquor, cartLiquor, Cart },
} = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingmiddleware');

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
