import Hit from '../Hit';

export default class PageView extends Hit {
  constructor(hostname, page, title, experiment) {
    super({
      t: 'pageview',
      dh: hostname,
      dp: page,
      dt: title
    }, experiment);
  }
}
