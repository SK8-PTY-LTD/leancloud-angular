
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('error-handler'),
  morgan = require('morgan'),
  routes = require('cloud/routes'),
  api = require('cloud/routes/api'),
  http = require('http'),
  path = require('path'),
  avosExpressHttpsRedirect = require('avos-express-https-redirect');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('views', 'cloud/views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.errorHandler());


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Attach the Express app to Cloud Code.
app.listen({
  'static': {
    maxAge: 604800000
  }
});
app.use(function(req, res, next) {
  res.status(404).render('404', {
    errorCode: 404,
    errorDescription: 'Sorry, page not found'
  });
});
