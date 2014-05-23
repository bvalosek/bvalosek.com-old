var Application = require('billy').Application;

var app = new Application();
app.manifest(require('./manifest.js'));
app.config('package', require('../../package.json'));
app.start()
  .then(function() {
    console.log('app started');
  })
  .catch(function(err) {
    console.log('problem starting app: %s', err);
  });
