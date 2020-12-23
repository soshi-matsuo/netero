const mongoose = require('mongoose');

const logger = require('../logger');

const SERVER = '127.0.0.1:27017';
const DB_NAME = 'netero';

mongoose.connect(`mongodb://${SERVER}/${DB_NAME}`, 
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        logger.info('connection SUCCESS');
    })
    .catch(err => {
        logger.error('MongoDB connection failed: %j', err);
    });

module.exports = mongoose;
