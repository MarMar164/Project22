const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Symbol extends Model {}

Symbol.init(
  {
    Symbol: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Country: {
     type: DataTypes.STRING,
     allowNull: false, 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'symbol',
  }
);

module.exports = Symbol;
