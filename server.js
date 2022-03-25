const express = require('express')
const app = express()
const port = 5050

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Selamat Datang di Projek LOKI Kelompok 8')
})


const admin = require("./Router/admin")
app.use('/admin', admin)

app.get("/print", function(req, res) {
    res.send("Cetak RPS")
})

app.listen(5050)