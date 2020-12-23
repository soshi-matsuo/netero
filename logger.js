const bunyan = require('bunyan');

module.exports = bunyan.createLogger({ name: 'netero', src: true });
