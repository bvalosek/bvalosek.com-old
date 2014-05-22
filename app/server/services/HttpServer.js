module.exports = HttpServer;

var Application  = require('billy').Application;
var express      = require('express');
var Promise      = require('es6-promise').Promise;
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var RedisStore   = require('connect-redis')(session);
var exphbs       = require('express3-handlebars');
var path         = require('path');

/**
 * Root HTTP server
 * @constructor
 */
function HttpServer(redis, app, config)
{
  var http = express();
  app.register('http', http).asInstance();

  // Cookies and use redis to persist session
  http.use(cookieParser(config('http.cookieSecret')));
  http.use(session({
    store: new RedisStore({ client: redis })
  }));

  // HBS life
  var viewPath = path.resolve(path.join(__dirname, '../views'));
  http.engine('hbs.html', exphbs({
    defaultLayout: 'main',
    extname: '.hbs.html',
    layoutsDir: path.resolve(path.join(__dirname, '../views/layouts'))
  }));
  http.set('views', viewPath);
  http.set('view engine', 'hbs.html');
  console.log('View path set to %s', viewPath);

  this.http   = http;
  this.config = config;
}

/**
 * @return {Promise}
 */
HttpServer.prototype.start = function()
{
  var http = this.http;
  var port = this.config('http.port');

  return new Promise(function(resolve, reject) {
    http.listen(port, function(err) {
      if (err)  {
        return reject(err);
      }

      console.log('http server is listening on port ' + port);
      resolve();
    });
  });
};

