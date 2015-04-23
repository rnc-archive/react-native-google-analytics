var Hit = require('../Hit');

class Event extends Hit {
  constructor(category, action, label, value, experiment) {
    this.type = 'event';
    super({
      ec: category,
      ea: action,
      el: label,
      ev: value
    }, experiment);
  }
}

module.exports = Event;
