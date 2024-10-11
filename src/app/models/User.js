const generate = require('../../helpers/generate');

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('USER', {
        ACCOUNT_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        USERNAME: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        PASSWORD: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        ROLE_ID: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        TOKEN_USER: {
            type: DataTypes.STRING(255),
            allowNull: true,
        }
    }, {
        tableName: 'ACCOUNT',
        timestamps: false,
        schema: 'dbo',
    });

    // Hook để tạo token trước khi lưu
    User.beforeCreate(async (user, options) => {
        user.TOKEN_USER = generate.generateRandomString(30);
    });

    return User;
};
