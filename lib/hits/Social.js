import Hit from '../Hit';

export default class Social extends Hit {
  constructor(action, network, target, experiment) {
    super({
      t: 'social',
      sa: action,
      sn: network,
      st: target
    }, experiment);
  }
}
