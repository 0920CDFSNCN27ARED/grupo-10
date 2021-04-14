module.exports = (sequelize, dataTypes) => {
    const alias = "Group";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        group: {
            type: dataTypes.STRING,
        },
    };
    const config = {
        tableName: "group",
        timestamp: false,
    };

    const Group = sequelize.define(alias, cols, config);

    /*     Group.associate = function (models) {
        Group.hasMany(models.Users, {
            as: "User",
            foreignKey: "id_group",
        });
    }; */

    return Group;
};
