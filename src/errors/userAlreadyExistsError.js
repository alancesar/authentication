class UserAlreadyExistsError extends Error {
  constructor(user) {
    super(`The user '${user}' already exists.`);
  }
}

module.exports = UserAlreadyExistsError;
