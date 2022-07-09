const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const course_plans = require("./course_plans");
const lecturers = require("./lecturers");

const course_plan_lecturers = sequelize.define('course_plan_lecturers' ,
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
    
    lecturer_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: lecturers,
          key: 'id'
        }
    },

    creator:
    {
        type : DataTypes.INTEGER,
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
    }, 
    
    {
    tableName: 'course_plan_lecturers',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'

});

module.exports = course_plan_lecturers;