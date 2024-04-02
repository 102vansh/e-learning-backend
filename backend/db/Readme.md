# MongoDB Connection Configuration

## Description

This document describes the configuration and connection setup for MongoDB in the e-learning application.

## Connection Setup

The MongoDB connection is established using the Mongoose library in Node.js. Below is the connection setup code snippet:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/e-learning', {
    // useunifiedTopology: true,
    // useNewUrlParser: true
}).then(() => {
    console.log("Connection successful");
}).catch((e) => {
    console.log(e);
});

Connection URL
mongodb://127.0.0.1:27017/e-learning: This is the URL of the MongoDB database server where the e-learning database is hosted.