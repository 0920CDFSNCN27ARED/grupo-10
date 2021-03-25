const db = require("../db/models");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");
const Users = require("../db/models/Users");

module.exports = {
    login: (req, res) => {
        const errors = validationResult(req);

        console.log(req.body);
        if (errors.isEmpty()) {
            const user = db.Users.findOne({
                where: { email: req.body.email },
            });
            console.log(user);
        }

        if (user && (req.body.password = user.password)) {
            req.session.loggedUserId = user.id;
            req.session.loggedUserEmail = user.email;
        } else {
            res.render("users/login", { errors: errors.errors });
        }
    },

    register: (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Users.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                username: req.body.username,
            });

            res.redirect("/login");
        } else {
            res.render("user/register", { errors: errors.errors });
        }
    },

    showLogin: (req, res) => {
        res.render("users/login");
    },

    showCreate: (req, res) => {
        res.render("users/register");
    },
};
