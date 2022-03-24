var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Selamat Datang di Projek LOKI Kelompok 8')
});

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

app.get('/new', (req,res)=> {
  res.send("User New Form")
});

app.get('/profile', (req,res)=> {
  res.send("Selamat Datang Si A")
});

app.get('/setting', (req,res)=> {
  res.send("Pilihlah pengaturan")
});

app.get('/home', (req,res)=> {
  res.send("Pagi, All")
});

app.get('/feedback', (req,res)=> {
  res.send("Berikan pendapat dan saran anda")
});

app.get('/dashboard', (req,res)=> {
  res.send("Dashboard Pengguna")
});

let user = {
  "nama":"Vallen",
  "Alamat" : "PADANG",
  "umur": 20
};

app.listen(3000)