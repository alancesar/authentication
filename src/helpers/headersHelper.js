const jwt = require('../security/jwt');
const TokenNeededError = require('../errors/tokenNeededError');

module.exports = {
  readToken: ({ headers }) => {
    const { authorization } = headers;

    if (authorization) {
      const [bearer, token] = authorization.split(' ');

      if (bearer === 'Bearer' && token) {
        // && /.*=$/.test(token)
        const utf8 = Buffer.from(token, 'base64').toString('utf-8');
        return jwt.decode(utf8);
      }
    }

    throw new TokenNeededError();
  },
  writeToken: (res, data) => jwt.encode(data).then((token) => {
    const base64 = Buffer.from(token).toString('base64');
    res.setHeader('Authorization', `Bearer ${base64}`);
  }),
};
