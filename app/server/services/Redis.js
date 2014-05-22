module.exports = Redis;

var redis   = require('redis');
var url     = require('url');
var Promise = require('es6-promise').Promise;

/**
 * Expose a cache store
 * @constructor
 */
function Redis(app, config)
{
  var redisUrl = config('redis.url');
  var client;

  if (!redisUrl) {
    console.warn('no redis credentials found, using default connection info');
    client = redis.createClient();
  } else {
    var parsed = url.parse(redisUrl);
    var port = parsed.port;
    var hostname = parsed.hostname;
    var password = parsed.auth.split(':')[1];

    client = redis.createClient(port, hostname);

    this.auth = new Promise(function(resolve, reject) {
      client.auth(password, function(err) {
        if (err) {
          return reject(err);
        }
        console.log('authenticated with redis');
        resolve();
      });
    });
  }

  app.register('redis', client);
}

/**
 * @return {Promise} Wait for authentication (if we did any)
 */
Redis.prototype.start = function()
{
  return this.auth;
};
