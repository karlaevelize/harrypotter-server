const Sequelize = require("sequelize");
const db = require("../db");
const Comments = require("../comments/model");

const PotterNews = db.define("potternew", {
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  resume: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  article: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Comments.belongsTo(PotterNews);
PotterNews.hasMany(Comments);

module.exports = PotterNews;
