const express = require('express')
const app = express()
const port = 42069
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
  res.render('index')
})

app.get('/mahasiswa', function (req, res) {
  res.render('Mahasiswa/dashboard')
})

app.get('/mahasiswa/detail-rps', function (req, res) {
  res.render('Mahasiswa/rps')
})

app.get('/admin/home', function (req, res) {
  res.render('/Admin/home')
})

app.get('/admin/home', function (req, res) {
  res.render('/Admin/home')
})

app.listen(42069)