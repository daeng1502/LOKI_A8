const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const lecturers = sequelize.define('lecturers' , {
    id:{
        type : DataTypes.BIGINT,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name:{
        type : DataTypes.STRING,
        allowNull : false
    },
    reg_id: {
        type : DataTypes.STRING,
        allowNull : false
    },
    phone : {
        type : DataTypes.STRING,
        allowNull : false
    },
    status :{
        type : DataTypes.INTEGER,
        allowNull : false
    },
    created_at : {
        type : DataTypes.DATE
    },
    updated_at : {
        type : DataTypes.DATE
    }
}, {
    tableName: 'lecturers',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
    
});

module.exports = lecturers;