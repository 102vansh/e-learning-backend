const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    views:{
        type:Number,
        default:2
        
    },
    numberoflectures:{
        type:Number,
        default:1
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    lectures:[
        {
            title:String
        },
        {
            description:String
        },
        {
            viedeos:{
                public_id:String,
                url:String
            }
        },
       
    ] ,
    level:{
        type:String,
        enum:['hard','medium','easy']
    },
      
      enrolledUsers: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        name: {
            type: String
        },
        email: {
            type: String
        }
    }]
    

},{timestamps:true})
module.exports = mongoose.model('Course',courseSchema)