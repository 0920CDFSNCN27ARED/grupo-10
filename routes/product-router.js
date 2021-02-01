const express = require("express");
const router = express.Router();
const productController = require("../controller/product-controller");

const multer = require("multer");
const upload = multer({ dest: "public/img/" });

router.get("/", productController.getList);
router.get("/create", productController.showCreate);
router.post("/new", upload.single("image"), productController.create);
router.get("/:id/detail", productController.getOne);
router.get("/:id/edit", productController.showEdit);
router.put("/:id/edit", upload.single("image"), productController.edit);
router.delete("/:id", productController.delete);

module.exports = router;
