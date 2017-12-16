import Serializable from './Serializable';

export default class Hit extends Serializable {
  constructor(properties, experiment) {
    super();

    this.set(properties);

    if (experiment) {
      this.set(experiment.toObject());
    }
  }

  replace(properties) {
    this.properties = {};
    this.set(properties);
  }

  set(properties) {
    this.properties = Object.assign(this.properties, properties);
  }
}
