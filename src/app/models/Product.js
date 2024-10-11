
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('PRODUCT', {
        PRODUCT_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NAME: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        DESCRIPTION: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },
        PRICE: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        DATE_RELEASE: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        CATEGORY_ID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'CATEGORY',
                key: 'CATEGORY_ID',
            }
        }
    }, {
        tableName: 'PRODUCTS',
        timestamps: false,  // Nếu bảng không có trường createdAt và updatedAt,
        schema: 'dbo',
    });
}
