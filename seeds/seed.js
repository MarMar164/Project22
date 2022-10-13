const sequelize = require('../config/connection');
const { User, Project, Symbol } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const symbolData = require('./symbolData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  
  await Symbol.bulkCreate(symbolData);

  

  process.exit(0);
};

seedDatabase();
