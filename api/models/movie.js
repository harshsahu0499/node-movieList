const {DataTypes} = require("sequelize")
const sequelize = require('../config/sequelize_setup');
const Movie = sequelize.define("movies", {
   
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    director: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    poster: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    release: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    rating: {
        type: DataTypes.DOUBLE,
        defaultValue: 0,
    },
    
}, {timestamps:false});
module.exports = Movie;
