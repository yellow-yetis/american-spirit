const router = require('express').Router();
const {
  models: { Order },
} = require('../db');

// /api/orders/
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    next(error);
  }

  router.post('/', async (req, res, next) => {
    try {
      console.log('test');
      const newOrder = await Order.create(req.body);
      res.json(newOrder);
    } catch (error) {
      next(error);
    }
  });
});

module.exports = router;
