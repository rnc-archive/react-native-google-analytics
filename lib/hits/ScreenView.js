import Hit from '../Hit';

export default class ScreenView extends Hit {
  constructor(appName, screenName, appVersion, appId, appInstallerId, experiment) {
    super({
      t: 'screenview',
      an: appName,
      cd: screenName,
      av: appVersion,
      aid: appId,
      aiid: appInstallerId
    }, experiment);
  }
}
