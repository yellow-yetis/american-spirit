const router = require('express').Router();
const {
  models: { User },
} = require('../db');
const { requireToken } = require('./gatekeepingmiddleware');
module.exports = router;
requireToken;
router.get('/', requireToken, async (req, res, next) => {
  try {
    console.log('This is what I want ', req.user);
    if (!req.user.isAdmin) {
      return res.status(403).send('Access Denied');
    }
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
