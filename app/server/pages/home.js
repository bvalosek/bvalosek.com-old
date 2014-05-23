module.exports = homePage;

function homePage(config)
{
  return function(req, res, next)
  {
    res.render('index', {
      version: config('package.version')
    });
  };
}
