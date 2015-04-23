var Hit = require('../Hit');

class Social extends Hit {
  constructor(action, network, target, experiment) {
    this.type = 'social';
    super({
      sa: action,
      sn: network,
      st: target
    }, experiment);
  }
}

module.exports = Social;
