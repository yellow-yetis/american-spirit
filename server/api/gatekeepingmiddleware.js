const {
  models: { User },
} = require('../db');
// store all functions here to act as middleware between requests and response
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    // JOE_CR: I would suggest checking to see if you have a token to use here
    // else respond with a 401.
    const user = await User.findByToken(token);
    // JOE_CR: I would suggest checking to see if you found a user using the token,
    // else response with a 401.
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = async (req, res, next) => {
  // JOE_CR: What if req.user isn't there? That would happen if you used this
  // middleware but didn't use `requireToken` as a middleware before it.
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
