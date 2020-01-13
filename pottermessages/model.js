const Sequelize = require("sequelize");
const db = require("../db");

const PotterMessage = db.define("pottermessage", {
  name: Sequelize.STRING,
  text: Sequelize.TEXT
});

module.exports = PotterMessage;
