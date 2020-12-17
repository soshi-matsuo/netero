const mongoose = require('mongoose');
const SERVER = '127.0.0.1:27017';
const DB_NAME = 'netero';

mongoose.connect(`mongodb://${SERVER}/${DB_NAME}`, 
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log('connection SUCCESS');
    })
    .catch(err => {
        console.error(err);
    });

module.exports = mongoose;
