const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db.js');
const userRoutes = require('./routes/user.route.js');
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.route.js');
const mapsRoutes = require('./routes/maps.route.js');
const rideRoutes = require('./routes/ride.route.js');

connectToDb();

app.use(cors()); // Enables CORS middleware for handling cross-origin requests
app.use(express.json()); //// is middleware in Express.js that parses incoming JSON payloads in HTTP requests. It allows you to access request body data in JSON format through `req.body`. This is essential for handling POST/PUT requests that contain JSON data.
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);


module.exports = app;



















// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import cors from 'cors';

// const app = express();
// app.use(cors());

// app.get("/", (req, res) => {
//     res.send("Hello, World!");
// });

// export default app; 














































