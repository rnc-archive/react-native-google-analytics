var Hit = require('../Hit');

class Exception extends Hit {
  constructor(description, isFatal, experiment) {
    super('exception', {
      exd: description,
      exf: isFatal
    });
  }
}

module.exports = Exception;
