const service = require('../service/userService');
const headersHelper = require('../helpers/headersHelper');
const fieldsMustBeInformedValidation = require('../validations/fieldsMustBeInformedValidation');

module.exports = (app) => {
  app.post('/signin', (req, res, next) => {
    const {
      name,
      email,
      username,
      password,
    } = req.body;

    const data = Object.assign({}, {
      name,
      email,
      username,
      password,
    });

    fieldsMustBeInformedValidation(data)
      .then(() => service.signin(data))
      .then(({ uuid, role }) => headersHelper.writeToken(res, { uuid, role }))
      .then(() => res.sendStatus(200))
      .catch((e) => { next(e); });
  });
};
