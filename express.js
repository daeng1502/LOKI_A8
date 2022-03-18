var express = require('express')
var app = express()
app.get('/', function (req, res) {
  res.send('Selamat Datang di Projek LOKI')
})
app.listen(3000)