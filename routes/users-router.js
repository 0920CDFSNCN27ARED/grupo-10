const express = require("express");
const router = express.Router();
const { check, validationResult, body } = require("express-validator");
const userController = require("../controller/users-controller");

router.get("/login", userController.showLogin);
router.post(
    "/",
    [
        check("email")
            .isEmail()
            .notEmpty()
            .withMessage("Debe ingresar un e-mail valido"),
        check("password")
            .isLength({ min: 8, max: undefined })
            .notEmpty()
            .withMessage("la contraseña debe tener al menos 8 caracteres"),
    ],
    userController.login
);

router.get("/register", userController.showCreate);
router.post(
    "/",
    [
        check("first_name").notEmpty().isLength({ min: 2 }),
        check("last_name").notEmpty().isLength({ min: 2 }),
        check("date").notEmpty().isDate(),
        check("email")
            .notEmpty()
            .isEmail()
            .withMessage("Debe ser un email valido"),
        check("password")
            .notEmpty()
            .isLength({ min: 8, max: undefined })
            .withMessage("La contaseña debe tener al menos 8 caracteres"),
    ],
    userController.register
);

module.exports = router;
