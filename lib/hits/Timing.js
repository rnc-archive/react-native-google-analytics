var Hit = require('../Hit');

class Timing extends Hit {
  constructor(category, variable, time, label, experiment) {
    super('timing', {
      utc: category,
      utv: variable,
      utt: time,
      utl: label
    }, experiment);
  }
}

module.exports = Timing;
