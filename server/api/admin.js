const router = require('express').Router();
const {
  models: { User, Liquor, cartLiquor, Cart },
} = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingmiddleware');

router.get('/users', requireToken, isAdmin, async (req, res, next) => {
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

router.get('/products', async (req, res, next) => {
  try {
    const products = await Liquor.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/products/:productId', async (req, res, next) => {
  try {
    const liquor = await Liquor.findByPk(req.params.productId);
    res.send(liquor);
  } catch (error) {
    next(error);
  }
});

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
    res.json(await Liquor.create(req.body));
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
      console.log('this is my productId ', req.body);
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
      } = req.body;
      res.json(await product.update(req.body));
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
      console.log('I made it to the delete api');
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
