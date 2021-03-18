module.exports = (sequelize, dataTypes) => {
    const alias = "Products";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,
        },
        description: {
            type: dataTypes.STRING,
        },
        price: {
            type: dataTypes.INTEGER,
        },
        discount: {
            type: dataTypes.INTEGER,
        },
        image: {
            type: dataTypes.STRING,
        },
        /*     id_category: {
            type: dataTypes.INTEGER,
        }, */
    };
    const config = {
        tableName: "products",
        timestamp: false,
    };

    const Products = sequelize.define(alias, cols, config);

    Products.associate = function (models) {
        /* Products.belongsTo(models.Categories, {
            as: "categories",
            foreignKey: "id_category",
        });
 */
        Products.belongsToMany(models.Users, {
            as: "users",
            through: "users_products",
            foreignKey: "id_products",
            otherKey: "id_users",
        });
    };

    return Products;
};
