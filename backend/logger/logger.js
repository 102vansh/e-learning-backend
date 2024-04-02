const {createLogger,format,transports} = require('winston')
const logger = createLogger({
    transports:[
        new transports.Console(),
        new transports.File({
          level:'warn',
          filename:'logwarning.log'
        }),
        new transports.File({
          level:'error',
          filename:'logerror.log'
        }),
        new transports.MongoDB({
         db: "mongodb://127.0.0.1:27017/e-learning"
        })
      ],
      format:format.combine(
        format.json(),
        format.metadata(),
        format.timestamp(),
        format.prettyPrint()
      )
    })
    module.exports = logger
