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
  var id = setInterval(()=>{
    socket.emit('senserParam',Math.floor(Math.random() * 10));
  },500);
  socket.on('clientMessege', (msg) => {
    clearInterval(id);
    console.log('clearInterval',id);
    socket.emit('serverMessege',msg);
  });
  console.log('connected websocket');
});

