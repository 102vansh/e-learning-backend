const User = require('../models/user.models')
const {ErrorHandler} = require('../middleware/error')
const jwt = require('jsonwebtoken')

//is authenticated is middleware only the user which is login can perform any task
exports.isauthenticated = async(req,res,next) =>{
    try{
const {token} = req.cookies
if(!token){
    return next(new ErrorHandler('token is not found',500))
}
const decode = await jwt.verify(token,process.env.JWT_SECRET)
req.user = await User.findById(decode.id)
next()
    }catch(error){
        return next(error)
    }
}
//is authorize is role==admin only admin can perform the task
exports.isautherize = async (req,res,next) =>{
    try{
    const {role} = req.body
    const user = await User.findOne({role})
    if(!role == 'admin'){
        return next(new ErrorHandler('Unauthorize role',500))
    }
    next()
}catch(error){
    return next(error)
}
}