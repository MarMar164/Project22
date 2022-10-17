const User = require('./User');
const Project = require('./Project');
const Symbol = require('./Symbol')

const Article = require('./Article')

const Favorite = require('./Favorite')


User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Symbol, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Favorite,
    unique: false
  }
});

Symbol.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Favorite,
    unique: false
  }
});

module.exports = { User, Project, Symbol, Favorite, Article };

