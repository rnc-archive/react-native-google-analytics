import Serializable from './Serializable';

export default class CustomDimensions extends Serializable {
  constructor(category, action, label, value, experiment) {
    super('event', {
      ec: category,
      ea: action,
      el: label,
      ev: value
    }, experiment);
  }

  addDimension(index, name) {
    this.properties = {
      [`cd${index}`]: name
    };
  }

  removeDimension(index) {
    delete this.properties[`cd${index}`];
  }
}
