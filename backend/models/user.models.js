const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail,"Enter correct email type"]

    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        public_id:{
             type:String
        },
        url:{
            type:String
        }
    },
    role:{
            type: String,
            enum: ['admin', 'user'], // You can define the possible roles using an enum
          },
          resetpasstoken:{
            type:String
          },
          resetpasstoken:{
            type:String
          },
},{timestamps:true})

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password,10)
    }
next()

})
userSchema.methods.comparepassword = async function(password){
    return await bcrypt.compare(password,this.password)

}

userSchema.methods.generatetoken = async function(){
return await jwt.sign({id:this._id},process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_EXPIRE
})
}
userSchema.methods.getgeneratetoken = async function(){
    const resettoken = crypto.randomBytes(20).toString("hex")
   this.resetpasstoken = crypto.createHash('sha256').update(resettoken)
   this.resetpassexpire = Date.now() +15 *60 *1000
    return resettoken
}




module.exports = mongoose.model('User',userSchema)