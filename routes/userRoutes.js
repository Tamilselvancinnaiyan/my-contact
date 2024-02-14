const express = require('express');
const router = express.Router();
const { registerUser, currentUser, loginUser } = require("../controllers/userController");
const validator = require('../middleware/tokenHandler');


  router.post("/register", registerUser);
  router.post("/login", loginUser);
  router.get("/currentUser", validator, currentUser);

module.exports = router;
