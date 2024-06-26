# E-Learning Application Backend

This repository contains the backend code for the E-Learning Application, which provides APIs for managing courses and user accounts.

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Setup](#setup)
4. [API Documentation](#api-documentation)
5. [Error Handling](#error-handling)
6. [Authors](#authors)
7. [License](#license)

## Readme Files
All Folder has its own readme file.

## Introduction
The E-Learning Application backend is built using Node.js, Express.js, and MongoDB. It offers various APIs for user authentication, course management, lecture management, and user profile management.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Cloudinary (for file uploads)
- Winston (for logging)
- JWT (JSON Web Tokens) for authentication

## Setup
1. **Clone Repository:**
git clone https://github.com/102vansh/e-learning-backend.git
cd e-learning-backend

markdown
Copy code

2. **Install Dependencies:**
npm install

markdown
Copy code

3. **Environment Variables:**
Create a `.env` file in the root directory and add the following variables:
PORT=8080
MONGODB_URI= process.env.MONGODB_URI
JWT_SECRET= process.env.JWT_SECRET
JWT_EXPIRE= process.env.JWT_EXPIRE
CLOUD_NAME= process.env.CLOUD_NAME
API_KEY= process.env.API_KEY
API_SECRET= process.env.API_SECRET 



4. **Run Server:**
npm start


## middleware Readme
- [Middleware Readme](./backend/middleware/Readme.md)

## Server Readme
- [Server Readme](./backend/Readme.md)

## Models Documentation
 - [Course Model](./backend/models/Readme.md)
 - [User Model](./backend/models/Readme.md)

## Controller Documentation
- [Course Controller](./backend/controller/Readme.md)
- [User Controller](./backend/controller/Readme.md)

## API Documentation
- [Course APIs](./backend/routes/Readme.md)
- [User APIs](./backend/routes/user/Readme.md)

## Error Handling
Error handling is implemented using custom error middleware. It provides meaningful error messages and status codes for various scenarios.

## DB Schema 

Here is DB Schema for User Collection and Course Collection 

```javascript
-----------------------------------
|         User Collection         |
-----------------------------------
| _id            | ObjectId       |
| name           | String         |
| email          | String         |
| password       | String         |
| avatar         | Object         |
|   - public_id  | String         |
|   - url        | String         |
| role           | String         |
| resetpasstoken | String         |
| resetpassexpire| Date           |
| createdAt      | Date           |
| updatedAt      | Date           |
-----------------------------------


-----------------------------------
|        Course Collection        |
-----------------------------------
| _id            | ObjectId       |
| title          | String         |
| description    | String         |
| category       | String         |
| views          | Number         |
| numberoflectures| Number        |
| createdBy      | ObjectId       |
| lectures       | Array          |
|   - title      | String         |
|   - description| String         |
|   - videos     | Object         |
|       - public_id | String      |
|       - url     | String        |
| level          | String         |
| enrolledUsers  | Array          |
| createdAt      | Date           |
| updatedAt      | Date           |
-----------------------------------

```







