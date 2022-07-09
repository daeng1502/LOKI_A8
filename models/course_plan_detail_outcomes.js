const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const course_plans_details = require("./course_plans_details");
const course_los = require("./course_los");

const course_plan_detail_outcomes = sequelize.define('courses',
  {
    id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    course_plan_detail_id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: course_plans_details,
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
  tableName: 'course_plan_detail_outcomes',
  timestamps: true,
  updatedAt: 'updated_at',
  createdAt: 'created_at'

});

module.exports = course_plan_detail_outcomes;