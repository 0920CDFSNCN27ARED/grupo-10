const users = require("../utils/users");

module.exports = {
    register: (req, res) => {
        res.render("users/register");
    },

    login: (req, res) => {
        res.render("users/login");
    },

    showCreate: (req, res) => {
        res.render("/users/create");
    },

    create: (req, res) => {
        res.redirect("index");
    },
};
