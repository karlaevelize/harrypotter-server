const Sequelize = require("sequelize");
const db = require("../db");

const PotterFact = db.define("potterfact", {
  fact: { type: Sequelize.TEXT }
});

module.exports = PotterFact;
