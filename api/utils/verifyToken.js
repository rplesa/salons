const jwt = require("jsonwebtoken");
const createError = require("../utils/error");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated."));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid."));
    req.user = user;
    next();
  });
};

module.exports.verifyToken = verifyToken;

exports.verifyUser = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err || req.user.id !== req.params.id || !req.user.isAdmin) {
      return next(createError(403, "You are not authorized."));
    }
    next();
  });
};

exports.verifyAdmin = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err || !req.user.isAdmin) {
      return next(createError(403, "You are not authorized."));
    }
    next();
  });
};
