class FieldsMustBeInformed extends Error {
  constructor(...fields) {
    super(`${fields.length > 1 ? 'These fields' : 'This field'} must be informed: ${fields.join(', ')}.`);
  }
}

module.exports = FieldsMustBeInformed;
