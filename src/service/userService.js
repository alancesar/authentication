const User = require('../models/user');
const security = require('../security/security');
const InvalidEmailOrPasswordError = require('../errors/invalidEmailOrPasswordError');
const UserAlreadyExistsError = require('../errors/userAlreadyExistsError');

const parse = user => ({
  name: user.name,
  email: user.email,
  username: user.username,
  uuid: user.uuid,
  role: user.role,
  createdAd: user.createdAd,
});

class UserService {
  static signin({
    name,
    email,
    username,
    password,
  }) {
    return new Promise((resolve, reject) => {
      UserService.exists({ email }).then((exists) => {
        if (exists) {
          reject(new UserAlreadyExistsError(email));
          return;
        }

        security.encrypt(password).then((hash) => {
          const model = new User();
          model.name = name;
          model.email = email;
          model.username = username;
          model.password = hash;

          model.save((error, user) => (error ? reject(error) : resolve(user)));
        });
      });
    });
  }

  static login({ email, password }) {
    return new Promise((resolve, reject) => {
      User.findOne({ email }, (error, user) => {
        if (error) {
          reject(error);
          return;
        }

        if (!user) {
          reject(new InvalidEmailOrPasswordError());
          return;
        }

        security.compare(password, user.password).then((valid) => {
          if (!valid) {
            reject(new InvalidEmailOrPasswordError());
            return;
          }

          resolve(parse(user));
        });
      });
    });
  }

  static getByUUID(uuid) {
    return new Promise((resolve, reject) => {
      User.findOne({ uuid }, (error, user) => (
        error ? reject(error) : resolve(user ? parse(user) : null)));
    });
  }

  static exists({ email }) {
    return new Promise((resolve, reject) => {
      User.findOne({ email }, (error, user) => (error ? reject(error) : resolve(Boolean(user))));
    });
  }
}

module.exports = UserService;
