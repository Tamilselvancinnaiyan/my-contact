const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const user = require("../models/userModel");

//@desc register a user
//@route GET /api/user/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, password, email } =req.body;
   if(!username || !password || !email) {
    res.status(400)
    throw new Error ("All fields are required")
   }
   
  const userAvliable = await user.findOne({ email});
   if(userAvliable){
    res.status(400)
    throw new Error ("user was already registered ")
   }
  // has password
  const hasPassword = await bcrypt.hash(password, 10)
  console.log("encrypted password",hasPassword)
  const user = await User.create({
    username,
    email,
    password: hasPassword,
  })
  console.log("created user",user);
  if (user){
    res.status(201).json({_id: user.id, email: user.email});
  }else{
    res.status(400);
    throw new errors("Error creating user")
  }
  res.json({message: "user registered"});
});


//@desc login user
//@route GET /api/user/login
//@access public
const loginUser = asyncHandler(async(req, res) => {
  res.json({message: "user logged in"});
});

//@desc get current user
//@route GET /api/user/currentUser
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({message: "Current user logged in"});
});

module.exports = {
  registerUser,
  currentUser,
  loginUser
};
