const express = require('express')
const dotenv = require('dotenv')
const { transports, format, error } = require('winston')
const { db } = require('./models/user.models')
const expresswinston = require('express-winston')
require('winston-mongodb')
const logger = require('./logger/logger')
const {errormiddleware} = require('./middleware/error')
const cookieparser = require('cookie-parser')
const fileUpload = require('express-fileupload')
require('./db/conn')
const app = express()
dotenv.config({path:"./config/config.env"})
const port = process.env.PORT 

app.use(expresswinston.logger({
  winstonInstance:logger,
  statusLevels:true,
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
  colorize: false,
  ignoreRoute: function (req, res) { return false; }
})); 

const cloudinary = require('cloudinary').v2

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())
//for uploading images cloudinary
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });

  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );
//routes importes
const userrouter = require('./routes/user.route')
const courserouter = require('./routes/couse.route')
//routing
app.use('/api/v1/user',userrouter)
app.use('/api/v1/course',courserouter)

const myformat = format.printf(({level,meta,timestamp}) =>{
  return `${timestamp} ${level}: ${meta.message}`
})
//logger middleware
app.use(expresswinston.errorLogger({
  transports:[
    new transports.File({
      filename: 'loginternalError.log'
    })
  ],
  format :format.combine(
    format.json(),
    format.timestamp(),
    myformat
  )
}))
//Error controller middleware
app.use(errormiddleware)
app.listen(port,(req,res)=>{
    console.log(`server is running at port no..${port}`)
})