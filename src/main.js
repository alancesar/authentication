require('./config/database');
const app = require('./config/app');
const logger = require('./config/logger');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server running in http://localhost:${port}`);
});
