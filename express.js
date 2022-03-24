var express = require('express')
var app = express()
app.get('/', function (req, res) {
  res.send('Selamat Datang di Projek LOKI Kelompok 8')
})

app.get('/new', (req,res)=> {
  res.send("User New Form")
})


app.listen(3000)