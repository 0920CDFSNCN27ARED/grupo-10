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
            type: dataTypes.DOBLE,
        },
        discount: {
            type: dataTypes.INTEGER,
        },
        id_category: {
            type: dataTypes.INTEGER,
        },
        size: {
            type: dataTypes.INTEGER,
        },
    };
    const config = {
        tableName: "products",
        timestamp: false,
    };

    const Users = sequelize.define(alias, cols, config);

    return Products;
};
