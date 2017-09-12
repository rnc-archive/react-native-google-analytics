import Hit from '../Hit';

export default class Timing extends Hit {
  constructor(category, variable, time, label, experiment) {
    super({
      t: 'timing',
      utc: category,
      utv: variable,
      utt: time,
      utl: label
    }, experiment);
  }
}
