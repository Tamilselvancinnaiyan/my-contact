const express = require('express');
const routes = express.Router();


router.post("/register", (req, res) => {
    res.json({message: "user registered"});
})

router.post("/login", (req, res) => {
    res.json({message: "user registered"});
})

router.post("/currentUser", (req, res) => {
    res.json({message: "user registered"});
})
