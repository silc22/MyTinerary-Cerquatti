const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authControllers = {

    addNewUser: async (req, res) => {
        const {name, lastName, country, email, url, password, google} = req.body
        try {
            let repeatedUser = await User.findOne({email: email})
            if (repeatedUser) throw new Error
            else{
            const hashedPassword = bcryptjs.hashSync(password)
            const newUser = new User({name, lastName, country, email, url, password: hashedPassword, google})
            const token = await jwt.sign({...newUser}, process.env.SECRET_KEY) 
            await newUser.save()
            res.json({success: true, response: {name: newUser.name, _id: newUser._id, token:token, url: newUser.url}, error: null})
        }} catch(error) {
            res.json({success: false, response: error.message})
        }
    }, 

    signUser: async (req,res) => {
        const {email, password, google} = req.body 
        try {
            let savedUser = await User.findOne({email})
            if (savedUser.google && !google) throw new Error ("Invalid email")
            if (!savedUser) throw new Error ("Email and/or password incorrect")
            let match = bcryptjs.compareSync(password, savedUser.password)
            const token = await jwt.sign({...savedUser}, process.env.SECRET_KEY)
            if (!match) throw new Error ("Email and/or password incorrect")
            res.json({success: true, response: {token:token, name: savedUser.name, url: savedUser.url}, error: null})
        } catch (error) {
            res.json({success: false, response: error.message})
        } 
    },
    
    deleteUser: async (req, res) => {
        try {
            let deleteUser = await User.findOneAndDelete({_id: req.params.id})
            if (deleteUser) {
                res.json({success: true, response: deleteUser})
            } else {
                throw new Error()
            }
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    }, 

    tokenVerification: (req, res) => {
        console.log(req.user)
        res.json({success:true, response: {name: req.user.name, url: req.user.url, _id: req.user._id}})
    }
}

module.exports = authControllers;