var path = require('path');

module.exports = {
  port         : process.env.PORT || 8123,
  webroot      : path.resolve(path.join(__dirname, '../../../dist/client')),
  cookieSecret : 'i eat cookies all damn day and love it'
};
