const router = require('express').Router();
const {
  models: { User, Liquor },
} = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingmiddleware');

router.post('/products', requireToken, isAdmin, async (req, res, next) => {
  try {
    const {
      name,
      category,
      region,
      description,
      price,
      ABV,
      imageUrl,
      stock,
      size,
    } = req.body;
    res.json(
      await Liquor.create({
        name,
        category,
        region,
        description,
        price,
        ABV,
        imageUrl,
        stock,
        size,
      })
    );
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// PUT /api/admin/products/:productId *update existing product*
router.put(
  '/products/:productId',
  requireToken,
  isAdmin,
  async (req, res, next) => {
    try {
      const product = await Liquor.findByPk(req.params.productId);
      const {
        name,
        category,
        region,
        description,
        price,
        ABV,
        imageUrl,
        stock,
        size,
      } = req.body;
      res.json(
        await product.update({
          name,
          category,
          region,
          description,
          price,
          ABV,
          imageUrl,
          stock,
          size,
        })
      );
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

// DELETE /api/admin/products/:productId *remove existing product*
router.delete(
  '/products/:productId',
  requireToken,
  isAdmin,
  async (req, res, next) => {
    try {
      const product = await Liquor.findByPk(req.params.productId);
      await product.destroy();
      res.json(product);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);
module.exports = router;
