var Serializable = require('./Serializable');

class Experiment extends Serializable {
  constructor(id, variant) {
    super();
    this.properties.xid = id;
    this.properties.xvar = variant;
  }
}

module.exports = Experiment;
