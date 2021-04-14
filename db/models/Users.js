module.exports = (sequelize, dataTypes) => {
    const alias = "Users";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: dataTypes.STRING,
        },
        last_name: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        username: {
            type: dataTypes.STRING,
            unique: {
                args: true,
                msg: "Nombre de usuario ya existente",
            },
        },
        password: {
            type: dataTypes.STRING,
        },
        /* id_group: {
            type: dataTypes.INTEGER,
        }, */
    };
    const config = {
        tableName: "users",
        timestamp: false,
    };

    const Users = sequelize.define(alias, cols, config);

    /* Users.associate = function (models) {
        Users.belongsTo(models.Group, {
            as: "group",
            foreignKey: "id_group",
        });

        Users.belongsToMany(models.Products, {
            as: "products",
            through: "users_products",
            foreignKey: "id_users",
            otherKey: "id_products",
        });
    }; */

    return Users;
};
