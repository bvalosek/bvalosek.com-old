module.exports = Server;

var path         = require('path');
var exphbs       = require('express3-handlebars');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var RedisStore   = require('connect-redis')(session);
var express      = require('express');

/**
 * Setup our express server with all the goodies we need.
 * @constructor
 */
function Server(redis, config, http)
{
  // Cookies and use redis to persist session
  http.use(cookieParser(config('http.cookieSecret')));
  http.use(session({
    store: new RedisStore({ client: redis })
  }));

  // Handlebars for the templating engine + layout style
  var viewPath = path.resolve(path.join(__dirname, './views'));
  http.engine('hbs.html', exphbs({
    defaultLayout: 'main',
    extname: '.hbs.html',
    layoutsDir: path.resolve(path.join(__dirname, './views/layouts'))
  }));
  http.set('views', viewPath);
  http.set('view engine', 'hbs.html');
  console.log('view path set to %s', viewPath);

  // Server out static files
  http.use(express.static(config('http.webroot')));
  console.log('static server middleware added');
}
