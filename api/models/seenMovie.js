const {DataTypes} = require("sequelize")
const sequelize = require('../config/sequelize_setup');


const seenMovie = sequelize.define("seenMovies", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
});

module.exports = seenMovie;