var fs   = require('fs');
var path = require('path');

module.exports = {
  services: [
    require('./services/Postgres.js'),
    require('./services/Redis.js'),
    require('./services/HttpServer.js'),
    require('./services/Routes.js'),
    require('./services/StaticServer.js')
  ],
  config: (function() {
    var configs = {};
    fs.readdirSync(path.join(__dirname, 'config')).forEach(function(f) {
      console.log('loading config file %s', f);
      configs[f.replace('.js', '')] = require(path.join(__dirname, 'config', f));
    });
    return configs;
  })()
};
