const db = require("../db/models/Users");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");
const session = require("express-session");

module.exports = {
    login: async (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const users = await db.Users.findOne({
                where: { email: req.body.email },
            });
            console.log(users);
            if (user && bcrypt.compareSync(req.body.password, users.password)) {
                req.session.loggedUser = user.id;
                req.session.loggedUserEmail = user.email;
            }
        } else {
            return res.render("login", { errors: errors });
        }
    },

    register: (req, res, next) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Users.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
            });
            res.redirect("/users/login");
        } else {
            res.render("/users/register", { errors: errors });
        }
        /* const users = getUsers();

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
        saveUsers(users);*/
    },

    showLogin: (req, res) => {
        res.render("users/login");
    },

    showCreate: (req, res) => {
        res.render("users/register");
    },
};
