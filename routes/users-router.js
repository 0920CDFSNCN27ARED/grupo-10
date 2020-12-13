const express = require("express");
const router = express.Router();
const userController = require("../controller/users-controller");

router.get("/", userController.register);
router.get("/login", userController.login);

module.exports = router;
