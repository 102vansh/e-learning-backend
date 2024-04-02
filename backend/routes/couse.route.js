const express = require('express')
const { isauthenticated, isautherize } = require('../middleware/auth')
const { createcourse, getmycourse, getsinglecourse, getallcourse, updatecourse, deletecourse, addlecture, deleteLecture, getAllLectures, enrollCourse, getEnrolledUsers, unenrollCourse, searchcourse, paginationandfilteration } = require('../controller/course.controller')
const router = express.Router()
//is authenticated is middleware only the user which is login can perform any task
//is authorize is role==admin only admin can perform the task
router.route('/create').post(isauthenticated,isautherize,isautherize,createcourse)
router.route('/mycourse').get(isauthenticated,isautherize,getmycourse)
router.route('/singlecourse/:id').get(isauthenticated,isautherize,getsinglecourse)
router.route('/updatecourse').put(isauthenticated,isautherize,updatecourse)
router.route('/allcourse').get(isauthenticated,isautherize,getallcourse)
router.route('/delete/:id').delete(isauthenticated,isautherize,deletecourse)
router.route('/addlecture/:id').post(isauthenticated,isautherize,addlecture)
router.route('/delete/:courseId').delete(isauthenticated,isautherize,deleteLecture)
router.route('/getallecture/:courseId').get(isauthenticated,isautherize,getAllLectures)
router.route('/enrolluser/:courseId').post(isauthenticated,isautherize,enrollCourse)
router.route('/getenrolluser/:courseId').get(isauthenticated,isautherize,getEnrolledUsers)
router.route('/unenrolluser/:courseId').delete(isauthenticated,isautherize,unenrollCourse)
router.route('/filter').get(isauthenticated,isautherize,paginationandfilteration)


module.exports = router