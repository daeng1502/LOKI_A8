const express = require("express");
const router = express.Router();

router.get('/login', function(req, res) {
    res.send("Halaman Login Mahasiswa")
})

router.get('/logout', function(req, res) {
    res.send("Halaman Logout Mahasiswa")
})

router.get('/masukkan NIM', function(req, res) {
    res.send("masukan NIM Mahasiswa")
})

router.get('/view_laporan_rps', function(req, res) {
    let obj = 
    {
        "list-rps": ["RPS PWEB", "RPS Data Mining"],
        "persentase-project-base": 70,
        "persentase-case-base": 30,
    }
    res.json(obj);
})

router.get("/print_laporan", function(req, res)
{
    res.send("Print Laporan")
})

module.exports = router;