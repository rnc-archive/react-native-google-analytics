var Hit = require('../Hit');

class ScreenView extends Hit {
  constructor(appName, appVersion, appId, appInstallerId, screenName, experiment) {
    super('screenview', {
      an: appName,
      av: appVersion,
      aid: appId,
      aiid: appInstallerId,
      cd: screenName
    }, experiment);
  }
}

module.exports = ScreenView;
