const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");
  
const course_plans = require("./course_plans");

const course_plans_details = sequelize.define('course_plans_details' ,
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

    week:
    {
        type : DataTypes.INTEGER,
        allowNull: false 
    }, 

    material:
    {
        type : DataTypes.TEXT,
        allowNull: false 
    },

    method:
    {
        type : DataTypes.TEXT,
        allowNull: false
    },

    student_experience:
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
    }, 
    
    {
    tableName: 'course_plans_details',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'

});

module.exports = course_plans_details;