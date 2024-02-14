const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validator = asyncHandler(async (req, res, next) => { 
  let token;
  let autHeader = req.headers.authorization || req.headers.Authorization; 
  if (autHeader && autHeader.startsWith("Bearer")) { 
    token = autHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
      if (err) {
        res.status(401);
        throw new Error("Unauthorized user");
      }
      req.user = decode.user;  
    }); 
  } else {
    res.status(401);
    throw new Error("Unauthorized user"); 
  }
});

module.exports = validator;
