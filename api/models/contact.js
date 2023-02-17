const {DataTypes} = require("sequelize")
const sequelize = require('../config/sequelize_setup');


const Contact = sequelize.define("contact",{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});
module.exports = Contact;