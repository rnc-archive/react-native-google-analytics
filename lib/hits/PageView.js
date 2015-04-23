var Hit = require('../Hit');

class PageView extends Hit {
  constructor(hostname, page, title, experiment) {
    this.type = 'pageview';
    super({
      dh: hostname,
      dp: page,
      dt: title
    }, experiment);
  }
}

module.exports = PageView;
