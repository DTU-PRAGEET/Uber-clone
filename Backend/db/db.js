const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log('Successfully connected to the database');
    })
    .catch(err => {
        console.error('Database connection error:', err);
        // process.exit(1); 
    });
}

module.exports = connectToDb;