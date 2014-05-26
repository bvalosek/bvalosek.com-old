module.exports = Server;

var path         = require('path');
var exphbs       = require('express3-handlebars');
var express      = require('express');
var favicons     = require('connect-favicons');

/**
 * Setup our express server with all the goodies we need.
 * @constructor
 */
function Server(config, http)
{
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

  // Favvies
  http.use(favicons(path.join(__dirname, '../../public/icons')));

  // Server out static files
  http.use(express.static(config('http.webroot')));
  console.log('static server middleware added');
}
