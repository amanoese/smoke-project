var express = require('express');
var app = express();
var http = require('http').Server(app);
var socket = require('socket.io');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Express Sample' });
  console.log('index.view!');
});

app.listen(3000, () => {
  console.log('listening on *:3000');
});

var io = socket.listen('3001', () => {
  console.log('listening on *:3000');
});

io.on('connection', (socket) => {
  socket.emit('clientMessege','Hellow, Websocket!');
  socket.on('clientMessege', (msg) => {
    console.log(msg);
  });
  console.log('connected websocket');
});

