const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./dbconfig");

const curricula = require("./curricula");

const curriculum_profiles = sequelize.define('curriculum_profiles',
  {
    id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    curriculum_id:
    {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: curricula,
        key: 'id'
      }
    },

    code:
    {
      type: DataTypes.TEXT,
      allowNull: false
    },

    name:
    {
      type: DataTypes.TEXT,
      allowNull: false
    },

    type:
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    description:
    {
      type: DataTypes.TEXT,
    },

    created_at:
    {
      type: DataTypes.DATE,
    },

    update_at:
    {
      type: DataTypes.DATE,
    },
    
  }, {
    tableName: 'curriculum_profiles',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
});

module.exports = curriculum_profiles;