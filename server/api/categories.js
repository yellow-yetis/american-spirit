const router = require('express').Router();
const {
  models: { Liquor },
} = require('../db');

router.get('/:category', async (req, res, next) => {
  try {
    const categories = await Liquor.findAll({
      where: {
        category: req.params.category,
      },
    });
    res.send(categories);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
