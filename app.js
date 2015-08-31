
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  cloud = require('./cloud'),
  methodOverride = require('method-override'),
  cookieParser = require('cookie-parser'),
  errorHandler = require('error-handler'),
  morgan = require('morgan'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path'),
  domain = require('domain');
  //avosExpressHttpsRedirect = require('avos-express-https-redirect');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');
app.use(cloud);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride());
app.use(express.static('public'));
//app.use(express.errorHandler());

app.use(function(req, res, next) {
var d = domain.create();
d.add(req);
d.add(res);
d.on('error', function(err) {
console.error('uncaughtException url=%s, msg=%s', req.url, err.stack || err.message || err);
if(!res.finished) {
res.statusCode = 500;
res.setHeader('content-type', 'application/json; charset=UTF-8');
res.end('uncaughtException');
    }
  });
  d.run(next);
 });
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



app.use(function(req, res, next) {
  res.status(404).render('404', {
    errorCode: 404,
    errorDescription: 'Sorry, page not found'
  });
});


app.use(function(req, res, next) {
var err = new Error('Not Found');
err.status = 404;
 next(err);
});

// error handlers
app.use(function(err, req, res, next) {
  console.log(err.stack || err.message || err);
  res.status(err.status || 500);
  res.send('error:' + err.message);
});

// Attach the Express app to Cloud Code.
module.exports = app;

