require('dotenv').config(); 

const Sequelize = require('sequelize');

// connection to db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3009,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
