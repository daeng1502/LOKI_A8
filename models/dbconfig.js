const { Sequelize } = require('sequelize');

const dbconfig = new Sequelize('loki_a8', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  try {
    dbconfig.authenticate();
    console.log('Koneski DB berhasil');
  } catch (error) {
    console.error('Koneksi Gagal', error);
  }

module.exports = dbconfig;