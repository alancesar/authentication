class TokenNeededError extends Error {
  constructor() {
    super('Authorization token needed.');
  }
}

module.exports = TokenNeededError;
