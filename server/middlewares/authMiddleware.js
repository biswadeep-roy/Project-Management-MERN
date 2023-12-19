const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decryptedToken = jwt.verify(token, process.env.jwt_secret);
    req.body.userId = decryptedToken.userId;
    next();
  } catch (error) {
    
    res.send({
      success: false,
      message: error.message,
    });
  }
};
