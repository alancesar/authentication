const service = require('../service/userService');
const headersHelper = require('../helpers/headersHelper');
const fieldsMustBeInformedValidation = require('../validations/fieldsMustBeInformedValidation');

module.exports = (app) => {
  app.post('/login', (req, res, next) => {
    const { email, password } = req.body;

    fieldsMustBeInformedValidation({ email, password })
      .then(() => service.login({ email, password }))
      .then(({ uuid, role }) => headersHelper.writeToken(res, { uuid, role }))
      .then(() => res.sendStatus(200))
      .catch((e) => { next(e); });
  });
};
