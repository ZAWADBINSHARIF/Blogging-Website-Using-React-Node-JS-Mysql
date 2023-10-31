// external import
import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

// internal import
import dbConnection from './config/dbConnection.js'
import authRoute from './routers/authRoute.js'
import postRoute from './routers/postRoute.js'

// for getting variables of env file
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

// for getting json data
app.use(express.json())
// for getting cookies
app.use(cookieParser())
// for getting form body data
app.use(express.urlencoded({extended: true}))


// Routers
app.get('/', (req, res) => res.send('<h1>Server is running 🚀</h1>'))
app.use('/api', postRoute)
app.use('/api/auth', authRoute)


// for database connection and runing the server
dbConnection({ app, PORT })