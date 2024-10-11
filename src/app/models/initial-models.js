const DataTypes = require("sequelize").DataTypes;

const _PRODUCT = require('./Product');
const _CATEGORY = require('./Category');
const _USER = require('./User');

function initialModelSqlServer(sequelize) {
    const PRODUCT = _PRODUCT(sequelize, DataTypes);
    const CATEGORY = _CATEGORY(sequelize, DataTypes);
    const USER = _USER(sequelize, DataTypes);
    return {
        PRODUCT, CATEGORY, USER
    }
}

module.exports = initialModelSqlServer;