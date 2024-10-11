
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('CATEGORY', {
        CATEGORY_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NAME: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    }, {
        tableName: 'CATEGORY',
        timestamps: false,  // Nếu bảng không có trường createdAt và updatedAt,
        schema: 'dbo',
    });
}