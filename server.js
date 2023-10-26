const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const colors = require('colors')
const errorHandler = require('./middlewares/error')
const connectDB = require('./config/db')
// Load env vars
dotenv.config({path: './config/config.env'});

//Rounte Files
const bootcamps = require('./routes/route.bootcamps.js')


const app = express()



// Body parser
app.use(express.json())
connectDB()

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

const server = app.listen (PORT,
    console.log('Server running in '+ process.env.NODE_ENV + ' mode on port ' + PORT.yellow,)
)

// Handle unhandled promise rejections

process.on('unhandledRejection', (err, promise) => {
console.log('Error: ' + err.message)
server.close(()=> process.exit(1))

})