var Hit = require('../Hit');

class ScreenView extends Hit {
  constructor(appName, screenName, appVersion, appId, appInstallerId, experiment) {
    super('screenview', {
      an: appName,
      cd: screenName,
      av: appVersion,
      aid: appId,
      aiid: appInstallerId
    }, experiment);
  }
}

module.exports = ScreenView;
