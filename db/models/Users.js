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
        password: {
            type: dataTypes.STRING,
        },
        id_group: {
            type: dataTypes.INTEGER,
        },
    };
    const config = {
        tableName: "users",
        timestamp: false,
    };

    const Users = sequelize.define(alias, cols, config);

    Group.associate = function (models) {
        Group.hasMany(models.Group, {
            as: "group",
            foreignKey: "id_group",
        });
    };

    return Users;
};
