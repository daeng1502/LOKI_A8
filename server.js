const express = require('express')
const app = express()
const port = 6969
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.json());

app.set('view engine', 'ejs');
app.use( express.static('public'));

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/login', function (req, res) {
  res.render('login-page')
})

app.get('/mahasiswa', function (req, res) {
  res.render('mhs-dashboard')
})

app.get('/mahasiswa-listrps', function (req, res) {
  res.render('mhs-list_rps')
})

app.get('/mahasiswa-detailrps', function (req, res) {
  res.render('mhs-detail_rps')
})

app.get('/admin', function (req, res) {
  res.render('admin-dashboard')
})

app.listen(port);