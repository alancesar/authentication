const bcrypt = require('bcrypt');

const rounds = process.env.ROUNDS || 10;

module.exports = {
  encrypt: plain => bcrypt.hash(plain, rounds),
  compare: (plain, hash) => bcrypt.compare(plain, hash),
};
