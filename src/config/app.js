const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('./cors');
const errors = require('../middlewares/errors');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);

// Routes
routes(app);

// Error Handling
app.use(errors);

module.exports = app;
