const getUsers = require("../utils/get-users");
const saveUsers = require("../utils/save-users");
const bcrypt = require("bcrypt");

module.exports = {
    login: (req, res) => {
        const users = getUsers();
        const user = users.find((users) => {
            users.user === req.body.user &&
                bcrypt.compareSync(req.body.password, user.password);
        });

        if (!user) {
            return res.redirect("/login");
        }

        return res.redirect("/");
    },

    register: (req, res) => {
        const users = getUsers();

        const lastUserIndex = users.length - 1;
        const lastUser = users[lastUserIndex];
        const newId = lastUser ? lastUser.id + 1 : 1;

        delete req.body.password_confirm;

        const newUser = {
            id: newId,
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 12),
        };

        users.push(newUser);
        saveUsers(users);

        res.redirect("/login");
    },

    showLogin: (req, res) => {
        res.render("users/login");
    },

    showCreate: (req, res) => {
        res.render("users/register");
    },
};
