const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try { const token = req.headers.authorization.split(" ")[1];
   const decodedToken = jwt.verify(
     token,
     process.env.JWT_SECRET
  ); req.userData = {
           email: decodedToken.email,
     };    next();
    } catch (error) {
      res.status(401).json({ message: "Auth failed!" });
    }
  };


  //client side application of JWT(scroll down): https://itnext.io/authentication-in-mern-stack-using-jwt-25c966027f77