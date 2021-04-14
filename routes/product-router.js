const express = require("express");
const router = express.Router();
const productController = require("../controller/product-controller");
const { check, validationResult, body } = require("express-validator");
const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/img/products");
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({ storage: storage });

router.get("/", productController.getList);
router.get("/create", productController.showCreate);
router.post(
    "/new",
    upload.any(),
    [
        check("name")
            .isLength()
            .withMessage("Debe ingresar el nombre del Producto"),
        check("description")
            .isLength({ min: 2 })
            .withMessage("Debe Agregar una descripcion del producto"),
        check("price")
            .isNumeric()
            .withMessage("Debe ingresar el precio del prducto"),
        body("image").custom(function (value) {
            const extension = path.extname(req.file[0].filename).toLowerCase();
            switch (extension) {
                case ".jpg":
                    return ".jpg";
                case ".jpeg":
                    return ".jpeg";
                case ".png":
                    return ".png";
                default:
                    throw new Error(
                        "Debe ingresar una imagen con extencion valida (.jpg, .jpeg, .png)"
                    );
            }
        }),
    ],
    productController.create
);
router.get("/:id/detail", productController.detail);
router.get("/:id/edit", productController.showEdit);
router.put(
    "/:id/edit",
    upload.any(),
    [
        check("name")
            .isLength()
            .withMessage("Debe ingresar el nombre del Producto"),
        check("description")
            .isLength({ min: 2 })
            .withMessage("Debe Agregar una descripcion del producto"),
        check("price")
            .isNumeric()
            .withMessage("Debe ingresar el precio del prducto"),
        body("image").custom(function (value) {
            const extension = path.extname(req.file[0].filename).toLowerCase();
            switch (extension) {
                case ".jpg":
                    return ".jpg";
                case ".jpeg":
                    return ".jpeg";
                case ".png":
                    return ".png";
                default:
                    throw new Error(
                        "Debe ingresar una imagen con extencion valida (.jpg, .jpeg, .png)"
                    );
            }
        }),
    ],
    productController.edit
);
router.delete("/:id", productController.delete);

module.exports = router;
