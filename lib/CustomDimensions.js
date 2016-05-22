import Serializable from './Serializable';

export default class CustomDimensions extends Serializable {

  addDimension(index, name) {
    this.properties = {
      [`cd${index}`]: name
    };
  }

  removeDimension(index) {
    delete this.properties[`cd${index}`];
  }
}
