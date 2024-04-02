# Course Routes

This markdown document outlines the routes and associated middleware for handling course-related requests in the application.

## Route Definitions

1. **Create Course**:
   - Endpoint: `/api/v1/course/create`
   - Method: POST
   - Middleware: `isauthenticated`, `isautherize`
   - Description: Allows authenticated and authorized users to create a new course.

2. **Get My Courses**:
   - Endpoint: `/api/v1/course/mycourse`
   - Method: GET
   - Middleware: `isauthenticated`, `isautherize`
   - Description: Retrieves the courses associated with the authenticated user.

3. **Get Single Course**:
   - Endpoint: `/api/v1/course/singlecourse/:id`
   - Method: GET
   - Middleware: `isauthenticated`, `isautherize`
   - Description: Retrieves details of a single course by its ID.

4. **Update Course**:
   - Endpoint: `/api/v1/course/updatecourse`
   - Method: PUT
   - Middleware: `isauthenticated`, `isautherize`
   - Description: Allows authenticated and authorized users to update course details.

5. **Get All Courses**:
   - Endpoint: `/api/v1/course/allcourse`
   - Method: GET
   - Middleware: `isauthenticated`, `isautherize`
   - Description: Retrieves all courses available on the platform.

6. **Delete Course**:
   - Endpoint: `/api/v1/course/delete/:id`
   - Method: DELETE
   - Middleware: `isauthenticated`, `isautherize`
   - Description: Allows authenticated and authorized users to delete a course.

7. **Add Lecture**:
   - Endpoint: `/api/v1/course/addlecture/:id`
   - Method: POST
   - Middleware: `isauthenticated`, `isautherize`
   - Description: Adds a new lecture to the specified course.

8. **Delete Lecture**:
   - Endpoint: `/api/v1/course/delete/:courseId`
   - Method: DELETE
   - Middleware: `isauthenticated`, `isautherize`
   - Description: Deletes a lecture from the specified course.

9. **Get All Lectures**:
   - Endpoint: `/api/v1/course/getallecture/:courseId`
   - Method: GET
   - Middleware: `isauthenticated`, `isautherize`
   - Description: Retrieves all lectures of a specified course.

10. **Enroll User**:
    - Endpoint: `/api/v1/course/enrolluser/:courseId`
    - Method: POST
    - Middleware: `isauthenticated`, `isautherize`
    - Description: Allows users to enroll in a specific course.

11. **Get Enrolled Users**:
    - Endpoint: `/api/v1/course/getenrolluser/:courseId`
    - Method: GET
    - Middleware: `isauthenticated`, `isautherize`
    - Description: Retrieves users enrolled in a specified course.

12. **Unenroll User**:
    - Endpoint: `/api/v1/course/unenrolluser/:courseId`
    - Method: DELETE
    - Middleware: `isauthenticated`, `isautherize`
    - Description: Allows users to unenroll from a specified course.

13. **Filter Courses**:
    - Endpoint: `/api/v1/course/filter`
    - Method: GET
    - Middleware: `isauthenticated`, `isautherize`
    - Description: Retrieves courses based on filtering criteria.

---

# User Routes

This markdown document outlines the routes and associated middleware for handling user-related requests in the application.

## Route Definitions

1. **Register User**:
   - Endpoint: `/api/v1/user/register`
   - Method: POST
   - Middleware: None
   - Description: Allows users to register by providing necessary details.

2. **Login User**:
   - Endpoint: `/api/v1/user/login`
   - Method: POST
   - Middleware: None
   - Description: Allows users to log in to their account.

3. **Logout User**:
   - Endpoint: `/api/v1/user/logout`
   - Method: GET
   - Middleware: `isauthenticated`
   - Description: Logs out the authenticated user.

4. **Get My Profile**:
   - Endpoint: `/api/v1/user/myprofile`
   - Method: GET
   - Middleware: `isauthenticated`
   - Description: Retrieves the profile information of the authenticated user.

5. **Get Single User**:
   - Endpoint: `/api/v1/user/singleuser/:id`
   - Method: GET
   - Middleware: `isauthenticated`
   - Description: Retrieves details of a single user by their ID.

6. **Get All Users**:
   - Endpoint: `/api/v1/user/alluser`
   - Method: GET
   - Middleware: `isauthenticated`
   - Description: Retrieves details of all users.

7. **Update Password**:
   - Endpoint: `/api/v1/user/updatepassword`
   - Method: PUT
   - Middleware: `isauthenticated`
   - Description: Allows users to update their password.

8. **Update Profile**:
   - Endpoint: `/api/v1/user/updateprofile`
   - Method: PUT
   - Middleware: `isauthenticated`
   - Description: Allows users to update their profile information.

9. **Delete User**:
   - Endpoint: `/api/v1/user/delete/:id`
   - Method: DELETE
   - Middleware: `isauthenticated`
   - Description: Deletes a user account.

10. **Forgot Password**:
    - Endpoint: `/api/v1/user/forgotpassword`
    - Method: POST
    - Middleware: None
    - Description: Initiates the process for resetting a forgotten password.

11. **Change Password**:
    - Endpoint: `/api/v1/user/changepassword/:token`
    - Method: PUT
    - Middleware: None
    - Description: Allows users to change their password after resetting it.

12. **Update Avatar**:
    - Endpoint: `/api/v1/user/updateavatar`
    - Method: PUT
    - Middleware: `isauthenticated`
    - Description: Allows users to update their avatar image.

---

