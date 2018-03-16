const FieldsMustBeInformedError = require('../errors/fieldsMustBeInformedError');
const emptyFieldsHelper = require('../helpers/emptyFieldsHelper');

module.exports = fields => new Promise((resolve, reject) => {
  const emptyFields = emptyFieldsHelper(fields);

  if (emptyFields.length > 0) {
    reject(new FieldsMustBeInformedError(...emptyFields));
    return;
  }

  resolve();
});
