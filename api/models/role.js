const {DataTypes} = require("sequelize")
const sequelize = require('../config/sequelize_setup');


const Role = sequelize.define("roles",{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});
module.exports = Role;
