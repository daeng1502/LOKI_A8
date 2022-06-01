const express = require('express')
const app = express()
const port = 8000
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.json())
app.set('view engine', 'ejs');
app.use( express.static( "views" ) );


app.get('/', function (req, res) {
  res.send('Selamat Datang di Projek LOKI Kelompok 8')
})


const admin = require("./Router/admin")
app.use('/admin', admin)

app.get("/print", function(req, res) {
    res.send("Cetak RPS")
})

app.listen(8000)