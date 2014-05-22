// Monitoring
require('newrelic');

var Application = require('billy').Application;

// Hello, World
var app = new Application();
app.manifest(require('./manifest.js'));
app.config('package', require('../../package.json'));
app.start().then(function() {
  console.log('app started');
});
