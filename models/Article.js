const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Article extends Model {}

Article.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false, 
      primaryKey: true,
     },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'article',
  }
);

module.exports = Article;
