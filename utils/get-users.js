const fs = require("fs");
const path = require("path");

function getUser() {
    const usersJson = fs.readFileSync(
        path.resolve(__dirname, "../data/users.json"),
        {
            encoding: "utf-8",
        }
    );
    return JSON.parse(usersJson);
}

//exporta base datos de usuarios.
module.exports = getUser;
