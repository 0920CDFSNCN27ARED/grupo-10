const express = require("express");
const router = express.Router();

const userController = require("../controller/users-controller");

router.get("/login", userController.showLogin);
router.post("/", userController.login);

router.get("/register", userController.showCreate);
router.post("/", userController.register);

module.exports = router;
