const role = require('../middlewares/rolesFilter');
const roles = require('../roles/roles');

module.exports = (app) => {
  app.get('/role/admin', role(roles.admin), (req, res) => {
    res.sendStatus(200);
  });

  app.get('/role/user', role(roles.user), (req, res) => {
    res.sendStatus(200);
  });
};
