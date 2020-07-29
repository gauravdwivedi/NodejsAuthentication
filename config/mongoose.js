const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/backendtest2', { useNewUrlParser: true });

const db = mongoose.connection;


db.on('error', console.error.bind(console, "Error connecting database"));

db.once('open', function () {
    console.log('Successfully connected to db');
})