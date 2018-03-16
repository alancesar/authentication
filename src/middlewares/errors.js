const ErrorHandler = require('../errors/errorHandler');
const FieldsMustBeInformedError = require('../errors/fieldsMustBeInformedError');
const InvalidEmailOrPasswordError = require('../errors/invalidEmailOrPasswordError');
const NotFoundError = require('../errors/notFoundError');
const TokenNeededError = require('../errors/tokenNeededError');
const UserAlreadyExistsError = require('../errors/userAlreadyExistsError');

const errorHandler = new ErrorHandler();

errorHandler.register(FieldsMustBeInformedError, 400);
errorHandler.register(InvalidEmailOrPasswordError, 401);
errorHandler.register(NotFoundError, 404, (err, req) => ({ path: req.url }));
errorHandler.register(TokenNeededError, 403);
errorHandler.register(UserAlreadyExistsError, 400);

module.exports = errorHandler.handle.bind(errorHandler);
