const express = require("express");
const router = express.Router();
const { check, validationResult, body } = require("express-validator");

const userController = require("../controller/users-controller");

router.get("/login", userController.showLogin);
router.post("/", userController.login);

router.get("/register", userController.showCreate);
router.post(
    "/",
    [
        check("first_name").isLength(),
        check("last-name").isLength(),
        check("date").isDate(),
        check("email").isEmail(),
        check("password").isLength({ min: 8, max: undefined }),
    ],
    userController.register
);

module.exports = router;
