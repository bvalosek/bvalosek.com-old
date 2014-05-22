module.exports = function(app, http)
{
  http.use('/debug', app.make(require('../endpoints/debug.js')));
};
