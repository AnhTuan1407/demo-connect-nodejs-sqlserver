module.exports = function (sequelize, DataTypes) {
    const role = sequelize.define('ROLE', {
        ROLE_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        NAME: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'ROLE',
        timestamps: false,
        schema: 'dbo',
    })

    return role;
}