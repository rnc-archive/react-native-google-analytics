var Serializable = require('./Serializable');

class Hit extends Serializable {

  constructor(type, properties, experiment) {
    super();
    this.set(properties);
    this.properties.t = type;
    this.type = type;
    if (experiment) {
      this.set(experiment.toObject());
    }
  }

  set(properties) {
    this.properties = Object.assign(this.properties, properties);
  }
}

module.exports = Hit;
