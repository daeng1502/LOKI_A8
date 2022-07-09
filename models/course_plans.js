const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const courses = require("./courses");

const course_plans = sequelize.define('course_plans' ,
{
    id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true
    },

    course_id:
    {
        type : DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: courses,
          key: 'id'
        }
    },

    rev:
    {
        type : DataTypes.INTEGER,
        allowNull: false 
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

    material:
    {
        type : DataTypes.TEXT
    },
    
    
    created_by:
    {
        type : DataTypes.BIGINT,
    },

    validated_by:
    {
        type : DataTypes.BIGINT,
    },
    
    
    validated_at:
    {
        type : DataTypes.BIGINT,
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
    tableName: 'course_plans',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'

});

module.exports = course_plans;