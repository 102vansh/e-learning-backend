const Course = require('../models/course.model')
const {ErrorHandler} = require('../middleware/error')

// admin will createcourse
exports.createcourse = async(req,res,next)=>{
    try{
const{title,description,category,level} = req.body
if(!title ||!description || !category || !level){
    return next(new ErrorHandler('provide full detail',500))
}
const course = await Course.create({title,description,category,level,createdBy:req.user._id})
res.status(201).json({
    success:true,
    message:"Course being successfully registered",
    course
})
    }catch(error){
return next(error)
    }
}

//Get all courses
exports.getallcourse = async(req,res,next)=>{
    try{
const getallcourse = await Course.find()
res.status(201).json({
    success:true,
    message:"course founded",
    getallcourse
})

    }catch(error){
return next(error)
    }
}
//Get single course
exports.getsinglecourse = async(req,res,next)=>{
    try{
const getsinglecourse = await Course.findById(req.params.id)
res.status(201).json({
    success:true,
    message:"single course founded",
    getsinglecourse
})

    }catch(error){
return next(error)
    }
}
// course uploaded by user
exports.getmycourse = async(req,res,next)=>{
    try{
        createdBy = req.user._id
const getmycourse = await Course.find({createdBy})
res.status(201).json({
    success:true,
    message:"single course founded",
    getmycourse
})

    }catch(error){
return next(error)
    }
}
//update your courses

exports.updatecourse = async(req,res,next)=>{
    createdBy = req.user._id
    try{
const {title,description,level,category} = req.body
const course = await Course.find(createdBy)

if(!course){
    return next(new ErrorHandler('user not found',500))
   }


const updatecourse = await User.findByIdAndUpdate(req.user._id,{title,description,level,category}, { new: true })
await course.save()
res.status(201).json({
    success:true,
    message:"profile Updated successfully",
    updatecourse
})
    }catch(error){
return next(error)
    }
}
//course delete
exports.deletecourse = async(req,res,next) =>{
    try{
        const id = req.params.id
       const course = await Course.findById(id)
       if(!course){
        return next(new ErrorHandler('user not found',500))
       }
       const deletecourse = await Course.findByIdAndDelete(id)
       res.status(201).json({
        success:true,
        message:"Course deleted successfully",
        deletecourse
    })
    } catch(error){
return next(error)
    }
}
//viedeo added in lectures
exports.addlecture = async(req,res,next) =>{
    try{
        const{title,description,viedeos} = req.body
const course = await Course.findById(req.params.id)
if(!course){
return next(new ErrorHandler('course not found',500))
}
course.lectures.push({title,description,viedeos
   

});
course.numberoflectures = course.lectures.length
        await course.save();
        res.status(201).json({
            success:true,
            message:"lectures added to course",
            course
        })

    }catch(error){
        return next(error)
    }
}
//all lectures by admin
exports.getAllLectures = async (req, res, next) => {
    try {
        const courseId = req.params.courseId; // Assuming courseId is passed as a parameter
        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }
        course.views += 1

        res.status(200).json({ success: true, data: course.lectures });
    } catch (error) {
        next(error);
    }
};
//delete lectures by admin
exports.deleteLecture = async (req, res, next) => {
    try {
        const courseId = req.params.courseId; // Assuming courseId is passed as a parameter
        const lectureId = req.params.lectureId; // Assuming lectureId is passed as a parameter
        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        const lectureIndex = course.lectures.findIndex(lecture => lecture._id.toString() === lectureId);
        if (lectureIndex === -1) {
            return res.status(404).json({ success: false, message: "Lecture not found" });
        }

        course.lectures.splice(lectureIndex, 1);
        await course.save();

        res.status(200).json({ success: true, message: "Lecture deleted successfully" });
    } catch (error) {
        next(error);
    }
};

//Student can enroll course email will be sent to him
exports.enrollCourse = async (req, res, next) => {
    try {
        const courseId = req.params.courseId;
        const userId = req.user._id; // Assuming user ID is available in req.user

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        // Check if user is already enrolled
        if (course.enrolledUsers.includes(userId)) {
            return res.status(400).json({ success: false, message: "User is already enrolled in this course" });
        }

        // Add user to enrolledUsers array
        course.enrolledUsers.push(userId);
        await course.save();
        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: '0201it211102',// here email will come from user 
            subject: " You are registered succesfully",
            html: "<strong>it works!</strong>",
          });
        
          if (error) {
            return res.status(400).json({ error });
          }
        

        res.status(200).json({ success: true, message: "User enrolled in course successfully" });
    } catch (error) {
        next(error);
    }
};
//get course which you have enrollled
exports.getEnrolledUsers = async (req, res, next) => {
    try {
        const courseId = req.params.courseId;

        const course = await Course.findById(courseId).populate('enrolledUsers');
        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        res.status(200).json({ success: true, enrolledUsers: course.enrolledUsers });
    } catch (error) {
        next(error);
    }
};
// unenroll the courses
exports.unenrollCourse = async (req, res, next) => {
    try {
        const courseId = req.params.courseId;
        const userId = req.user._id; // Assuming user ID is available in req.user

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        // Check if user is enrolled
        const index = course.enrolledUsers.indexOf(userId);
        if (index === -1) {
            return res.status(400).json({ success: false, message: "User is not enrolled in this course" });
        }

        // Remove user from enrolledUsers array
        course.enrolledUsers.splice(index, 1);
        await course.save();

        res.status(200).json({ success: true, message: "User unenrolled from course successfully" });
    } catch (error) {
        next(error);
    }
};
//filter the courses according to need
exports.paginationandfilteration = async (req, res, next) => {
   
    try {
        const page = parseInt(req.query.page)  -1 || 0;
        const limit = parseInt(req.query.limit)  || 0;
        const { category } = req.query;

        // Build the query object for filtering
        const query = {};
        if (category) {
            query.category = category;
        }

        // Find courses based on the constructed query
        const courses = await Course.find(query)
            .skip(page * limit)
            .limit(limit);

        // Count total number of courses matching the query
        const total = await Course.countDocuments(query);

        res.status(200).json({
            success: true,
            message: "Filtering and pagination successful",
            courses,
            limit,
            page: page + 1,
            total
        });
    
   }catch(error){
    return next(error)
   }
    
};
