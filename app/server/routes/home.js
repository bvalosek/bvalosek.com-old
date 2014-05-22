module.exports = function(config, http)
{
  http.get('/', function(req, res) {
    res.render('index', {
      version: config('package.version')
    });
  });
};
