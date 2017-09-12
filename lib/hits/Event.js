import Hit from '../Hit';

export default class Event extends Hit {
  constructor(category, action, label, value, experiment) {
    super({
      t: 'event',
      ec: category,
      ea: action,
      el: label,
      ev: value
    }, experiment);
  }
}
