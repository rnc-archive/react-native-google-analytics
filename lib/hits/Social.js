var Hit = require('../Hit');

class Social extends Hit {
  constructor(action, network, target, experiment) {
    super('social', {
      sa: action,
      sn: network,
      st: target
    }, experiment);
  }
}

module.exports = Social;
