var http    = require('http');
var express = require('express');
var hbars   = require('express-handlebars');
var routes  = require('./routes');

var app = {
  server: express(),
  config: require('./config'),
  log:    require('custom-logger').config({ level: 0, messageFormatting: true })
};


// set handlebars as the templating engine
app.server.engine('hbs', hbars({ defaultLayout: 'main', extname: '.hbs' }));
app.server.set('view engine', 'hbs');

// disable etag headers on responses
app.server.disable('etag');


// TODO: LOAD REAL ROUTES HERE
app.server.get('/', routes.index);

app.server.use('/', express.static(__dirname + '/public/'));


var server = http.createServer(app.server).listen(app.config.server.port, function() {
  app.log.info('%s running on port %d', app.config.name, app.config.server.port);
});

var io = require('socket.io').listen(server);

// TODO: load socket.io logic here
