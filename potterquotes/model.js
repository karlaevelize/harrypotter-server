const Sequelize = require("sequelize");
const db = require("../db");

const PotterQuote = db.define("potterquote", {
  quote: { type: Sequelize.TEXT },
  author: { type: Sequelize.STRING }
});

module.exports = PotterQuote;
