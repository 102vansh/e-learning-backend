# E-Learning Application API Documentation

## Course APIs

### Create Course
- **URL:** `/api/v1/course/create`
- **Method:** `POST`
- **Request Body:**
  - `title`: Title of the course (String, required)
  - `description`: Description of the course (String, required)
  - `category`: Category of the course (String, required)
  - `level`: Difficulty level of the course (String, required)
- **Response:**
  - Success: 201 Created
  - Failure: 500 Internal Server Error

### Get All Courses
- **URL:** `/api/v1/course/allcourse`
- **Method:** `GET`
- **Response:**
  - Success: 200 OK
  - Failure: 500 Internal Server Error

### Get Single Course
- **URL:** `/api/v1/course/singlecourse/:id`
- **Method:** `GET`
- **Request Parameters:**
  - `id`: Course ID (String, required)
- **Response:**
  - Success: 200 OK
  - Failure: 500 Internal Server Error

### Get User's Courses
- **URL:** `/api/v1/course/mycourse`
- **Method:** `GET`
- **Response:**
  - Success: 200 OK
  - Failure: 500 Internal Server Error

### Update Course
- **URL:** `/api/v1/course/updatecourse`
- **Method:** `PUT`
- **Request Body:**
  - `title`: New title of the course (String, required)
  - `description`: New description of the course (String, required)
  - `category`: New category of the course (String, required)
  - `level`: New difficulty level of the course (String, required)
- **Response:**
  - Success: 201 Updated
  - Failure: 500 Internal Server Error

### Delete Course
- **URL:** `/api/v1/course/delete/:id`
- **Method:** `DELETE`
- **Request Parameters:**
  - `id`: Course ID (String, required)
- **Response:**
  - Success: 201 Deleted
  - Failure: 500 Internal Server Error

### Add Lecture to Course
- **URL:** `/api/v1/course/addlecture/:id`
- **Method:** `POST`
- **Request Body:**
  - `title`: Title of the lecture (String, required)
  - `description`: Description of the lecture (String, required)
  - `viedeos`: Video details (Object)
- **Response:**
  - Success: 201 Created
  - Failure: 500 Internal Server Error

### Get All Lectures of a Course
- **URL:** `/api/v1/course/getallecture/:courseId`
- **Method:** `GET`
- **Request Parameters:**
  - `courseId`: Course ID (String, required)
- **Response:**
  - Success: 200 OK
  - Failure: 500 Internal Server Error

### Delete Lecture from Course
- **URL:** `/api/v1/course/delete/:courseId`
- **Method:** `DELETE`
- **Request Parameters:**
  - `courseId`: Course ID (String, required)
  - `lectureId`: Lecture ID (String, required)
- **Response:**
  - Success: 200 OK
  - Failure: 500 Internal Server Error

### Enroll User in Course
- **URL:** `/api/v1/course/enrolluser/:courseId`
- **Method:** `POST`
- **Request Parameters:**
  - `courseId`: Course ID (String, required)
- **Response:**
  - Success: 200 OK
  - Failure: 500 Internal Server Error

### Get Enrolled Users of a Course
- **URL:** `/api/v1/course/getenrolluser/:courseId`
- **Method:** `GET`
- **Request Parameters:**
  - `courseId`: Course ID (String, required)
- **Response:**
  - Success: 200 OK
  - Failure: 500 Internal Server Error

### Unenroll User from Course
- **URL:** `/api/v1/course/unenrolluser/:courseId`
- **Method:** `DELETE`
- **Request Parameters:**
  - `courseId`: Course ID (String, required)
- **Response:**
  - Success: 200 OK
  - Failure: 500 Internal Server Error

### Filter and Paginate Courses
- **URL:** `/api/v1/course/filter`
- **Method:** `GET`
- **Query Parameters:**
  - `page`: Page number for pagination (Number, optional, default: 1)
  - `limit`: Number of items per page (Number, optional, default: 10)
  - `category`: Category for filtering (String, optional)
- **Response:**
  - Success: 200 OK
  - Failure: 500 Internal Server Error

## User APIs

### Register User
- **URL:** `/api/v1/user/register`
- **Method:** `POST`
- **Request Body:**
  - `name`: Name of the user (String, required)
  - `email`: Email of the user (String, required)
  - `password`: Password of the user (String, required)
  - `role`: Role of the user (String, required)
- **Response:**
  - Success: 201 Created
  - Failure: 500 Internal Server Error

### Login User
- **URL:** `/api/v1/user/login`
- **Method:** `POST`
- **Request Body:**
  - `role`: Role of the user (String, required)
  - `email`: Email of the user (String, required)
  - `password`: Password of the user (String, required)
- **Response:**
  - Success: 201 Created
  - Failure: 500 Internal Server Error

### Logout User
- **URL:** `/api/v1/user/logout`
- **Method:** `GET`
- **Response:**
  - Success: 200 OK
  - Failure: 500 Internal Server Error

### Get User Profile
- **URL:** `/api/v1/user/myprofile`
- **Method:** `GET`
- **Response:**
  - Success: 201 Created
  - Failure: 500 Internal Server Error

### Get Single User
- **URL:** `/api/v1/user/singleuser/:id`
- **Method:** `GET`
- **Request Parameters:**
  - `id`: User ID (String, required)
- **Response:**
  - Success: 201 Created
  - Failure: 500 Internal Server Error

### Get All Users
- **URL:** `/api/v1/user/alluser`
- **Method:** `GET`
- **Response:**
  - Success: 201 Created
  - Failure: 500 Internal Server Error

### Update Password
- **URL:** `/api/v1/user/updatepassword`
- **Method:** `PUT`
- **Request Body:**
  - `oldpassword`: Old password of the user (String, required)
  - `newpassword`: New password of the user (String, required)
  - `confirmpassword`: Confirm new password of the user (String, required)
- **Response:**
  - Success: 201 Created
  - Failure: 500 Internal Server Error

### Delete User
- **URL:** `/api/v1/user/delete/:id`
- **Method:** `DELETE`
- **Request Parameters:**
  - `id`: User ID (String, required)
- **Response:**
  - Success: 201 Created
  - Failure: 500 Internal Server Error

### Update Profile
- **URL:** `/api/v1/user/updateprofile`
- **Method:** `PUT`
- **Request Body:**
  - `name`: New name of the user (String, required)
  - `email`: New email of the user (String, required)
- **Response:**
  - Success: 201 Created
  - Failure: 500 Internal Server Error

### Forgot Password
- **URL:** `/api/v1/user/forgotpassword`
- **Method:** `POST`
- **Request Body:**
  - `email`: Email of the user (String, required)
- **Response:**
  - Success: 200 OK
  - Failure: 500 Internal Server Error

### Change Password
- **URL:** `/api/v1/user/changepassword/:token`
- **Method:** `PUT`
- **Request Parameters:**
  - `token`: Token received via email for password reset (String, required)
- **Response:**
  - Success: 200 OK
  - Failure: 500 Internal Server Error

### Update Avatar
- **URL:** `/api/v1/user/updateavatar`
- **Method:** `PUT`
- **Request Body:**
  - `avatar`: New avatar image file (File, required)
- **Response:**
  - Success: 200 OK
  - Failure: 500 Internal Server Error

