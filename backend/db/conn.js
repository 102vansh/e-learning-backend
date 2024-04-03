const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/e-learning" ,{
   // useUnifiedTopology:true,
   // useNewUrlParser:true
}).then(() => {
    console.log("connection succeful")
}).catch((e) => {
    console.log(e)
})
 // Load environment variables from .env file

// const mongoose = require('mongoose');
// const { MONGODB_URI } = process.env; // Access the MongoDB connection string from environment variable

// mongoose.connect(MONGODB_URI, {
//     // useUnifiedTopology: true,
//     // useNewUrlParser: true
// }).then(() => {
//     console.log("connection successful");
// }).catch((e) => {
//     console.log(e);
// });
