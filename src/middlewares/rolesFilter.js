const headersHelper = require('../helpers/headersHelper');

module.exports = (...routeRoles) => (req, res, next) => {
  try {
    headersHelper.readToken(req).then(({ role }) => (
      routeRoles.some(routeRole => routeRole === role) ? next() : res.sendStatus(403)));
  } catch (e) {
    next(e);
  }
};
