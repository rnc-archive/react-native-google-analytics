var React = require('react-native');
var AdSupportIOS = require('AdSupportIOS');
var Dimensions = require('Dimensions');

module.exports = {
  getClientId(cb) {
    AdSupportIOS.getAdvertisingId(function(advertisingId) {
      cb(null, advertisingId);
    }, cb);
  },
  device: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
};
