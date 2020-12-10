const express = require("express");
const router = express.Router();
const productController = require("../controller/product-controller");

router.get("/", productController.getList);
router.get("/:id", productController.getOne);

module.exports = router;
