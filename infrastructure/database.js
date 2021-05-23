const mongoose = require('mongoose');

const logger = require('../logger');

mongoose.connect(process.env.MONGO_URL, 
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
