const login = require('../api/login');
const signin = require('../api/signin');
const role = require('../api/role');

const routes = [login, signin, role];

module.exports = app => routes.forEach(route => route(app));
