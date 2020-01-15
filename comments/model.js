const Sequelize = require("sequelize");
const db = require("../db");

const Comments = db.define("comment", {
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Comments;
