module.exports = (sequelize, dataTypes) => {
    const alias = "Categories";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        category: {
            type: dataTypes.STRING,
        },
    };
    const config = {
        tableName: "categories",
        timestamp: false,
    };

    const Categories = sequelize.define(alias, cols, config);

    /* Categories.associate = function (models) {
        Categories.hasMany(models.Products, {
            as: "products",
            foreignKey: "id_category",
        });
    }; */

    return Categories;
};
