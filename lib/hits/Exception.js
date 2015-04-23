var Hit = require('../Hit');

class Exception extends Hit {
  constructor(description, isFatal, experiment) {
    this.type = 'exception';
    super({
      exd: description,
      exf: isFatal
    });
  }
}

module.exports = Exception;
