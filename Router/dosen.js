const express = require("express");
const router = express.Router();

router.get('/profil', function(req, res) {
    res.send("Hai, Bapak/Ibu")
})

router.get('/logout', function(req, res) {
    res.send("Log out?")
})

router.get('/pilihan-krs', function(req, res) {
    res.send("Pilih krs yang anda mau")
})

router.get('/view_krs', function(req, res) {
    let obj = 
    {
        "list-rps": ["Pemograman Web"],
    }
    res.json(obj);
})

router.get("/Tampilkan", function(req, res)
{
    res.send("tampilkan Laporan")
})

module.exports = router;