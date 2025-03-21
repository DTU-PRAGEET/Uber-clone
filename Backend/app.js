const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db.js');
const userRoutes = require('./routes/user.route.js');
connectToDb();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/users', userRoutes);


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














































