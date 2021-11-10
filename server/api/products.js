const router = require('express').Router();
const {
  models: { Liquor },
} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const products = await Liquor.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
