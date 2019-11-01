var Sequelize = require("sequelize");

const db = new Sequelize("ombd", "postgres", "", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  operatorsAliases: Sequelize.Op, // Sequelize allows setting specific strings as aliases for operators
  protocol: null, // The protocol of the relational database. default 'tcp'
  logging: false // A function that gets executed every time Sequelize would log something.
});

module.exports = db;
