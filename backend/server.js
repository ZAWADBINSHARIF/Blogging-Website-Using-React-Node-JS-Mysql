// external import
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';

// internal import
import dbConnection from './config/dbConnection.js';
import authRoute from './routers/authRoute.js';
import postRoute from './routers/postRoute.js';
import { checkCookie } from './middlewares/checkLogin.js';

// for getting variables of env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const __dirname = path.resolve()

// for getting json data
app.use(express.json());
// for getting cookies
app.use(cookieParser());
// for getting form body data
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'backend', 'public', 'uploads')));

// Routers
app.get('/', (req, res) => res.send('<h1>Server is running 🚀</h1>'));
app.use(checkCookie)
app.use('/api', postRoute);
app.use('/api/auth', authRoute);


// for database connection and runing the server
dbConnection({ app, PORT });