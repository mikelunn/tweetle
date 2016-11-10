/**
 * Created by complunm on 11/1/2016.
 */
var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io')(server);

var path = require('path');

// twitter settings
require('./controllers/twitter')(io);

server.listen(process.env.PORT || "5000");

app.use('/',express.static(__dirname+'/../../dist'));

app.get('/*', function (req, res) {


  res.sendFile('index.html', { root: '/../../dist'});




});
//http://socket.io/docs/rooms-and-namespaces/
//TODO: Add post route where user can post bounds. After creating bounds the client would listen for even guid_bounds_changed.
//The post would include the guid, we would then emit the stream with the guid

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Set socket.io listeners.
io.on('connection', function(socket) {
  console.log('a user connected');

socket.on('disconnect', function() {
  console.log('user disconnected');
});
});



// app.listen(3000, function () {
//   console.log('Example listening on port 3000!');
// });

module.exports = app;
