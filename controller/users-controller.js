const db = require("../db/models");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");
const Users = require("../db/models/Users");

module.exports = {
    login: async (req, res) => {
        const errors = validationResult(req);
        /* const usuarioALoguearse; */

        if (errors.isEmpty()) {
            const user = await db.Users.findOne({
                where: { email: req.body.email },
            });
            console.log(user);
            if (user && (req.body.password = user.password)) {
                req.session.loggedUserId = user.id;
                req.session.loggedUserEmail = user.email;
            }
        } else {
            res.render("login");
        }
    },

    register: (req, res, next) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Users.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                username: req.body.username,
            });

            res.redirect("/views/users/login");
        } else {
            res.render("register", { errors: errors });
        }
    },

    showLogin: (req, res) => {
        res.render("users/login", { user: req.loggedUser });
    },

    showCreate: (req, res) => {
        res.render("users/register");
    },
};
