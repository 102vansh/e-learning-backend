const User = require('../models/user.models')
const {ErrorHandler} = require('../middleware/error')
const bcrypt  = require('bcrypt')
const cloudinary = require('cloudinary')
const crypto = require('crypto')
const {Resend} = require('resend')
const resend = new Resend(process.env.RESEND_SECRET)
//user registration  email sent to you when you will be registered
exports.registeruser = async(req,res,next)=>{
    try{
const{name,email,password,role}  = req.body
if(!name || !email || !password || !role){
    return next(new ErrorHandler('please fill all details',500))
}
const {avatar} = req.files
if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("User Avatar Required!", 400));
  }

let user = await User.findOne({email})
if(user){
    return next(new ErrorHandler('User is all ready registered',500))
}
const cloudinaryResponse = await cloudinary.uploader.upload(
    avatar.tempFilePath
  );
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "Cloudinary error:",
      cloudinaryResponse.error || "Unknown cloudinary error!"
    );
  }
  
user = await User.create({name,email,password,role,avatar:{
public_id:cloudinaryResponse.public_id,
url:cloudinaryResponse.url
}})

const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: '0201it211102',
    subject: " You are registered succesfully",
    html: "<strong>it works!</strong>",
  });

  if (error) {
    return res.status(400).json({ error });
  }

res.status(201).json({
    success:true,
    message:"Registration Successfull",
    user,
    data
})
    }catch(error){
        return next(error)
    }
}

//user login
exports.loginuser = async(req,res,next) =>{
    try{
const {role,email,password} = req.body
const user = await User.findOne({email})
if(!user){
    return next(new ErrorHandler('Register First',500))
}
if(user.role != role){
    return next(new ErrorHandler('You are not eligible for this role',500))
}
const ismatch = await user.comparepassword(password)
if(!ismatch){
    return next(new ErrorHandler('Email or Password is wrong',500))
}
const token = await user.generatetoken()
const option = {
    expiresin: new Date(
        process.env.COOKIE_EXPIRE * 24 *60 *60* 1000
    ),
    httpOnly:true
}

res.cookie('token',token,option).status(201).json({
    success:true,
    message:"Login successfully",
    user,
    token
})

    }catch(error){
        return next(error)
    }
}
//logout user
exports.logout = async(req,res,next) =>{
    try{
res.status(200).cookie('token',null,{expiresin:new Date(Date.now())})
res.status(201).json({
    success:true,
    message:"Logout Successfully",
    
})
    }catch{
return next(error)
    }
}
//get my profile
exports.myprofile = async(req,res,next)=>{
    try{
        
const myprofile = await User.find(req.user._id)
res.status(201).json({
    success:true,
    message:"All user founded",
    myprofile
})

    }catch(error){
return next(error)
    }
}
//get the single user
exports.getsingleuser = async(req,res,next)=>{
    try{
const getsingleuser = await User.findById(req.params.id)
res.status(201).json({
    success:true,
    message:"single user founded",
    getsingleuser
})

    }catch(error){
return next(error)
    }
}

//get all users
exports.getalluser = async(req,res,next)=>{
    try{
const getalluser = await User.find({})
res.status(201).json({
    success:true,
    message:"All user founded",
    getalluser
})

    }catch(error){
return next(error)
    }
}
//update your password
exports.updatepassword = async(req,res,next)=>{
    try{
const {oldpassword,newpassword,confirmpassword} = req.body
const user = await User.findById(req.user._id)
const ismatch = await bcrypt.compare(oldpassword,user.password)
if(!ismatch){
    return next(new ErrorHandler('Wrong password',500))
}
if(newpassword !== confirmpassword){
    return next(new ErrorHandler('password does not match',500))
}
user.password = newpassword
const updatepassword = await User.findByIdAndUpdate(req.user._id,{oldpassword,newpassword,confirmpassword})
await user.save()
res.status(201).json({
    success:true,
    message:"Password Updated successfully",
    updatepassword
})
    }catch(error){
return next(error)
    }
}
//delete the user
exports.deleteuser = async(req,res,next) =>{
    try{
        const id = req.params.id
       const user = await User.findById(id)
       if(!user){
        return next(new ErrorHandler('user not found',500))
       }
       const deleteuser = await User.findByIdAndDelete(id)
       res.status(201).json({
        success:true,
        message:"User deleted successfully",
        updateprofile
    })
    } catch(error){
return next(error)
    }
}
//update your profile
exports.updateprofile = async(req,res,next)=>{
    try{
const {name,email} = req.body
const user = await User.findById(req.user._id)

if(!user){
    return next(new ErrorHandler('user not found',500))
   }


const updateprofile = await User.findByIdAndUpdate(req.user._id,req.body, { new: true })
await user.save()
res.status(201).json({
    success:true,
    message:"profile Updated successfully",
    updateprofile
})
    }catch(error){
return next(error)
    }
}

// exports.sendemail = async(req,res,next)=>{
//     try{
//         const { data, error } = await resend.emails.send({
//             from: "onboarding@resend.dev",
//             to: '0201it211102@gmail.com',
//             subject: " You are registered succesfully",
//             html: "<strong>it works!</strong>",
//           });
        
//           if (error) {
//             return res.status(400).json({ error });
//           }
        
//           res.status(200).json({ data });
        
//     }catch(error){
// return next(error)
//     }
// }
//resettoken for forgoted password link will sent to your email
exports.forgotpassword = async(req,res,next)=>{
try{
const{email} = req.body
const user = await User.findOne({email})
if(!user){
    return next(new ErrorHandler('user not found',500))
}
const resettoken = user.getgeneratetoken()


const emailParams = {
    from: "onboarding@resend.dev",
    to: '0201it211102@gmail.com',
    subject: "Password Change Request",
    html: `<p>Please click <a href="http://yourwebsite.com/resetpassword/${resettoken}">here</a> to reset your password.</p>`
};

const { data, error } = await resend.emails.send(emailParams);

if (error) {
    throw new ErrorHandler(500, 'Failed to send email');
}

res.status(200).json({
    success:true,
    message:"password forgot",
    data
})
}catch(error){
return next(error)
}
}
//change the password by link from email

exports.changepassword = async(req,res,next)=>{
    try{
const {token} = req.params
 const resetpasstoken =   crypto.createHash('sha256').update(token).digest('hex')

 const user = await User.findOne({
    resetpasstoken,
    resetpassexpire:{
        $gt: Date.now()
    }
 })
 if(!user){
    return next(new ErrorHandler('token is not valid',500))
}
res.status(200).json({
    success:true,
    message:"password changed"
})
    }catch(error){
return next(error)
    }
}

//update user avatar
exports.updateavatar = async (req,res,next) => {
    try {
        const userId = req.user._id; // Assuming you're using authentication middleware to attach user details to request
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ success: false, message: 'No files were uploaded' });
        }

        const {avatar} = req.files

        const cloudinaryResponse = await cloudinary.uploader.upload(avatar.tempFilePath);
    
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error(
            "Cloudinary error:",
            cloudinaryResponse.error || "Unknown cloudinary error!"
        );
        return res.status(500).json({ success: false, message: "Failed to upload avatar" });
    }

    // Once uploaded, you can update the user's avatar field with the secure URL provided by Cloudinary
    user.avatar = cloudinaryResponse.url;
    await user.save();

    return res.status(200).json({ success: true, message: "Avatar updated successfully", user });


    
       
            
    } catch (error) {
        return next(error)
    }
}