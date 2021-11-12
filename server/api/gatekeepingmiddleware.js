const {
  models: { User },
} = require('../db');
// store all functions here to act as middleware between requests and response
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).send('Access Denied');
  } else {
    next();
  }
};

module.exports = {
  requireToken,
  isAdmin,
};
