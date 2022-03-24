var express = require('express')
var app = express()
app.get('/', function (req, res) {
  res.send('Selamat Datang di Projek LOKI Kelompok 8')
})

app.get('/', function(req, res){
  res.send('Silakan login disini');
});

app.get('/', function(req, res){
  res.send('Terimakasih dan sampai jumpa');
});

app.get('/', function(req, res){
  res.send('silakan tuliskan nama user');
});

app.get('/', function(req, res){
  res.send('test 1');
});


app.listen(3000)