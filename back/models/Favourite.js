const S = require("sequelize");

const db = require("../config/db");

const Favourite = db.define("favourite", {
  imdbID: {
    type: S.STRING,
    allowNull: false,
  },
  Poster: {
    type: S.STRING,
    allowNull: false,
  },
  Title: {
    type: S.STRING,
    allowNull: false,
  },
  Year: {
    type: S.INTEGER,
  },
});

module.exports = Favourite;
