const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('your_database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
