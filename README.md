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

markdown
Copy code

## API Documentation
- [Course APIs](./api-docs/course-api.md)
- [User APIs](./api-docs/user-api.md)

## Error Handling
Error handling is implemented using custom error middleware. It provides meaningful error messages and status codes for various scenarios.



## License
This project is licensed under the [MIT License](./LICENSE).
Replace <repository-url> with the URL of your Git repository. You can update the author information and add more details as needed. Additionally, you can include sections about database integration, logging, security measures, and any other relevant information about the backend.







