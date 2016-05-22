import Hit from '../Hit';

export default class Event extends Hit {
  constructor(category, action, label, value, experiment) {
    super('event', {
      ec: category,
      ea: action,
      el: label,
      ev: value
    }, experiment);
  }
}
