const Sequelize = require("sequelize");
const db = require("../db");

const PotterHead = db.define(
  "potterhead",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: "potterheads"
  }
);

module.exports = PotterHead;
