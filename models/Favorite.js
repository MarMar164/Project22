const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Favorite model
class Favorite extends Model {}

// create fields/columns for Favorite model
Favorite.init(
  {
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Favorite'
  }
);

module.exports = Favorite;
