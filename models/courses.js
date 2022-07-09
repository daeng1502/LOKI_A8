const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const curricula = require("./curricula");
  
const courses = sequelize.define('courses' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },

    curriculum_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: curricula,
          key: 'id'
        }
    },

    code:
    {
        type : DataTypes.STRING,
        allowNull: false 
    }, 

    name:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },

    alias_name:
    {
        type : DataTypes.TEXT
    },

    credit:
    {
        type : DataTypes.INTEGER,
        allowNull : false
    },

    semester:
    {
        type : DataTypes.INTEGER,
        allowNull : false
    },

    description:
    {
        type : DataTypes.TEXT
    },

    created_at:
    {
        type : DataTypes.DATE,
    },

    updated_at:
    {
        type : DataTypes.DATE,
    }

}, {
    tableName: 'courses',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'

});

module.exports = courses;