const express = require("express");
const router = express.Router();
const productController = require("../controller/product-controller");

const multer = require("multer");
const upload = multer({ dest: "public/images/" });

router.get("/", productController.getList);
router.get("/create", productController.showCreate);
router.post("/create", productController.create);
router.get("/:id/detail", productController.getOne);
router.get("/:id/edit", productController.showEdit);
router.patch("/:id/edit", productController.edit);

module.exports = router;
