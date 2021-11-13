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
router.get('/:productId', async (req, res, next) => {
  try {
    console.log(req.params.liquorId);
    const liquor = await Liquor.findByPk(req.params.productId);
    res.send(liquor);
  } catch (error) {
    next(error);
  }
});

router.get('/:category', async (req, res, next) => {
  try {
    const vodka = await Liquor.findAll({
      where: {
        category: req.params.category,
      },
    });
    res.send(vodka);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
