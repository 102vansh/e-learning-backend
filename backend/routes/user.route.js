const express = require('express')
const { registeruser, loginuser, myprofile, getsingleuser, getalluser, updatepassword, updateprofile, deleteuser, logout, sendemail, forgotpassword, changepassword, updateavatar } = require('../controller/user.controller')
const { isauthenticated } = require('../middleware/auth')
const router = express.Router()

//is authenticated is middleware only the user which is login can perform any task
router.route('/register').post(registeruser)
router.route('/login').post(loginuser)
router.route('/logout').get(isauthenticated,logout)
router.route('/myprofile').get(isauthenticated,myprofile)
router.route('/singleuser/:id').get(isauthenticated,getsingleuser)
router.route('/alluser').get(isauthenticated,getalluser)
router.route('/updatepassword').put(isauthenticated,updatepassword)
router.route('/updateprofile').put(isauthenticated,updateprofile)
router.route('/delete/:id').delete(isauthenticated,deleteuser)
// router.route('/email').post(sendemail)
router.route('/forgotpassword').post(forgotpassword)
router.route('/changepassword/:token').put(changepassword)
router.route('/updateavatar').put(isauthenticated,updateavatar)


module.exports = router