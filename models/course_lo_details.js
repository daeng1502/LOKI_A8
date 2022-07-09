const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const curriculum_los = require("./curriculum_los");
const course_los = require("./course_los");

const course_lo_details = sequelize.define('courses',
  {
    id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    curriculum_lo_id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: curriculum_los,
        key: 'id'
      }
    },

    course_lo_id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: course_los,
        key: 'id'
      }
    },

    created_at:
    {
      type: DataTypes.DATE,
    },

    updated_at:
    {
      type: DataTypes.DATE,
    }

  }, {
  tableName: 'course_lo_details',
  timestamps: true,
  updatedAt: 'updated_at',
  createdAt: 'created_at'

});

module.exports = course_lo_details;