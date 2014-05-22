module.exports = function(app, http)
{
  http.use('/quotes.json', app.make(require('../endpoints/quotes.js')));
};
