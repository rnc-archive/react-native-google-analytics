import Serializable from './Serializable';

export default class Experiment extends Serializable {
  constructor(id, variant) {
    super();
    this.properties.xid = id;
    this.properties.xvar = variant;
  }
}
