const blankOrNull = field => field === undefined || field === null || field === '';

module.exports = fields => Object.keys(fields).filter(key => (blankOrNull(fields[key])));
