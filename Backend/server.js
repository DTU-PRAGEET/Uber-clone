const http = require('http');
const app = require('./app.js');
const { initializeSocket } = require('./socket.js');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeSocket(server); // Initialize socket.io with the server

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});










// import app from './app.js';
// import http from 'http';

// const port = process.env.PORT || 3000;

// const server = http.createServer(app);

// server.listen(port, () => {
//     console.log(`🚀 Server is running on port ${port}`);
// });

























