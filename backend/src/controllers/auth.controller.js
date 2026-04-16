const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



/**
@name registerUserController
@description create a new user
@access public 
**/
async function registerUserController(req,res) {
    
    const {username , email, password} =req.body
    const isUserExist = await userModel.findOne({email})
    if (isUserExist) {
        return res.status(400).json({message:"User Already Exists"})
    }
    const hash = await bcrypt.hash(password,10)

    //create User
    const user = await userModel.create({
        username,
        email,
        password:hash
    })
     const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )
     res.cookie('token', token, {
        httpOnly: true
    })

    res.status(201).json({message:"User Registered Successfully",
        id:user._id,
        username:user.username,
        email:user.email})
}

/**
@name loginUserController
@description Logged a user 
@access public 
**/

async function loginUserController(req,res) {
    const {email , password} = req.body

    const user = await userModel.findOne({email})
    if (!user) {
        return res.status(400).json({message:"User account not found"})
    }
    const isPasswordValid = await bcrypt.compare(password,user.password)
    if (!isPasswordValid) {
        return res.status(400).json({message:"Invalid Password"})
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
    res.cookie('token', token)

    res.status(200).json({
        message:"User Logged In successfully",
        id:user._id,
        username:user.username,
        email:user.email
    })
}



module.exports = {
    registerUserController,
    loginUserController
}