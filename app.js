var app = require('express')();
var http = require('http').Server(app);

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('index', { title: 'Express Sample' });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
