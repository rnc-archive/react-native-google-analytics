var Hit = require('../Hit');

class Timing extends Hit {
  constructor(category, variable, time, label, experiment) {
    this.type = 'timing';
    super({
      utc: category,
      utv: variable,
      utt: time,
      utl: label
    }, experiment);
  }
}

module.exports = Timing;
