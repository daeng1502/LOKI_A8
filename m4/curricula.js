const { Sequelize, DataTypes, DatabaseError } = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost/loki-a8")

sequelize.define('curricula', {

  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: id
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  active: {
    type: DataTypes.STRING,
    allowNull: false,
    foreignKey: email

  },
  year_start: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  year_end: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  },
  created_at: {
    type: DataTypes.TIME
  },
  update_at: {
    type: DataTypes.DATE
  },
 
});