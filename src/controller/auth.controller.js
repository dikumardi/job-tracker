const { hash } = require("bcrypt")
const userModel = require("../models/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



/**
*@name registerUserController 
@description create a user
@access public
**/
async function registerUserController(req,res) {
    const {username ,email, password} = req.body
     const isuserExist = await userModel.findOne({email})

     if (isuserExist) {
        return res.status(400).json({
            message:"User Already Exists"
        })
     }
     const hash = await bcrypt.hash(password,10)

     const user =await userModel.create({
        username,
        email,
        password:hash
     })
          const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

     res.cookie('token', token)

     res.status(201).json({message:"User Registered Successfully"})    
}

/**
*@name loginUserController 
@description Logged in registered a user
@access public
**/
async function loginUserController(req,res) {
    const {email,password} = req.body

    const user = await userModel.findOne({email})
    if (!user) {
        return res.status(400).json({message:"User not found"})
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)

    if (!isPasswordValid) {
        return res.status(401).json({message:"Invalid Password"})
    }

  const token = jwt.sign({id:user._id}, process.env.JWT_SECRET) 
  res.cookie('token', token)

  res.status(200).json({message:"User Logged in Successfully"})
}

module.exports = {
    registerUserController,
    loginUserController
}