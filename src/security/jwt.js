const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const dir = path.resolve(__dirname, '../../keys');
const key = fs.readFileSync(`${dir}/jwtRS256.key`);
const pem = fs.readFileSync(`${dir}/jwtRS256.pem`);

module.exports = {
  encode: (data = {}) => new Promise((resolve, reject) => {
    jwt.sign(data, key, { algorithm: 'RS256' }, (error, token) => (error ? reject(error) : resolve(token)));
  }),
  decode: token => new Promise((resolve, reject) => {
    jwt.verify(token, pem, (error, decoded) => (error ? reject(error) : resolve(decoded)));
  }),
};
