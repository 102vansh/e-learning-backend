const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/e-learning',{
//   useunifiedTopology:true,
//    useNewUrlParser:true
}).then(() => {
    console.log("connection succeful")
}).catch((e) => {
    console.log(e)})