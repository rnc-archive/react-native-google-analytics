var React = require('react-native');
var Dimensions = require('Dimensions');

var {
  AdSupportIOS
} = React;

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
