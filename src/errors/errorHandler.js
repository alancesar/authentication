const logger = require('../config/logger');

class ErrorHandler {
  constructor() {
    this.errors = [];
  }

  register(error = Error, statusCode = 500, extra = () => ({})) {
    this.errors = this.errors.concat({ error, statusCode, extra });
  }

  handle(err, req, res, next) {
    if (!err) {
      return next();
    }

    const match = this.errors.find(e => err instanceof e.error);

    if (match) {
      return res.status(match.statusCode).json(Object.assign({}, {
        error: err.message,
      }, match.extra(err, req)));
    }

    logger.error(err);
    return res.sendStatus(500);
  }
}

module.exports = ErrorHandler;
