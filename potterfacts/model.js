const Sequelize = require("sequelize");
const db = require("../db");

const PotterFacts = db.define("potterfact", {
  fact: { type: Sequelize.STRING },
  source: { type: Sequelize.STRING }
});

module.exports = PotterFacts;
