const router = require('express').Router();
const {
  models: { Liquor },
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
router.get('/:liquorId', async (req, res, next) => {
  try {
    const liquor = await Liquor.findByPk(req.params.liquorId);
    res.send(liquor);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
