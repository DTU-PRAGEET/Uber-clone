// const dotenv = require('dotenv');
// dotenv.config();

// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());


// app.get("/", (req, res) =>{
//     res.send("Hello, World!");
// });

// module.exports = app;





const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World');
});


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














































