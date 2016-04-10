class Analytics {
  constructor(trackingId, clientId, version, userAgent) {
    this.version = version || 1;
    this.trackingId = trackingId;
    this.clientId = clientId;
    this.userAgent = userAgent || null;

    if (!userAgent) {
      throw new Error('You must specify a user agent in order for Google Analytics to accept the event. Use DeviceInfo.getUserAgent() from react-native-device-info for this.');
    }
  }

  send(hit) {

    hit.set({
      v: this.version,
      tid: this.trackingId,
      cid: this.clientId
    });

    let options = {
      method: 'post',
      body: hit.toQueryString(),
      headers: {
        'User-Agent': this.userAgent
      }
    }

    fetch(`https://www.google-analytics.com/collect?&z=${Math.round(Math.random() * 1e8)}`, options);
  }
}

module.exports = Analytics;
