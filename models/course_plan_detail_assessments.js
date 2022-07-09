const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const course_plans_details = require("./course_plans_details");
const course_plan_assessments = require("./course_plan_assessments");

const course_plan_detail_assessments = sequelize.define('courses',
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

    course_plan_assessment_id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: course_plan_assessments,
        key: 'id'
      }
    },

    percentage:
    {
      type: DataTypes.DOUBLE,
      allowNull: false
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
  tableName: 'course_plan_detail_assessments',
  timestamps: true,
  updatedAt: 'updated_at',
  createdAt: 'created_at'

});

module.exports = course_plan_detail_assessments;