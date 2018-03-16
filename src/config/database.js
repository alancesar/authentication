const mongoose = require('mongoose');
const logger = require('./logger');

mongoose.Promise = global.Promise;

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/security';
logger.info(`Trying to connect in ${uri}`);

module.exports = mongoose.connect(uri)
  .then(() => {
    logger.info(`Connected successfully in ${uri}`);
  })
  .catch((e) => {
    logger.error(`Error on connect ${uri}`);
    logger.error(e);
  });
