const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const course_plans = require("./course_plans");

const course_plan_references = sequelize.define('course_plan_references' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },

    course_plan_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: course_plans,
          key: 'id'
        }
    },

    title:
    {
        type : DataTypes.STRING,
        allowNull: false 
    }, 

    author:
    {
        type : DataTypes.STRING,
        allowNull: false 
    },

    publisher:
    {
        type : DataTypes.STRING,
        allowNull: false 
    },

    year:
    {
        type : DataTypes.INTEGER,
        allowNull : false
    },

    description:
    {
        type : DataTypes.TEXT,
        allowNull: false 
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
    tableName: 'course_plan_references',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'

});

module.exports = course_plan_references;