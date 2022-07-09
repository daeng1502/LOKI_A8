const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const courses = require("./courses");

const course_requirements = sequelize.define('course_requirements',
  {
    id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    course_id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: courses,
        key: 'id'
      }
    },

    required_course_id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: courses,
        key: 'id'
      }
    },

    required_level:
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    created_at:
    {
      type: DataTypes.DATE,
    },

    updated_at:
    {
      type: DataTypes.DATE,
    },

  }, {
    tableName: 'course_requirements',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'

});

  module.exports = course_requirements;