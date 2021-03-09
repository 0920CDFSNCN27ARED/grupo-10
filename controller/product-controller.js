//requiere getProducts.
/* const { where } = require("sequelize/types"); */
const db = require("../db/models");
//const getProducts = require("../utils/getProducts");
const toThousand = require("../utils/to-thousand");
//const saveProducts = require("../utils/save-products");

module.exports = {
    getList: (req, res) => {
        db.Products.findAll().then(function (products) {
            res.render("products/list", { products: products, toThousand });
        });
    },
    showCreate: (req, res) => {
        res.render("products/create");
    },
    create: (req, res) => {
        db.Products.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            /* id_category: req.body.id_category, */
            imagenes: req.body.imagenes,
        });
        res.redirect("/products");
    },
    detail: (req, res) => {
        db.Products.findByPk(req.params.id).then(function (product) {
            res.render("products/detail", { product: product });
        });
    },
    showEdit: (req, res) => {
        db.Products.findByPk(req.params.id).then(function (product) {
            res.render("products/edit", product);
        });

        /*  if (req.params.id == null) {
            return res.status(404).send("404 NOT FOUND!");
        } */
    },

    edit: (req, res) => {
        db.Products.update(
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                discount: req.body.discount,
                /* id_category: req.body.id_category, */
                imagen: req.body.imagen,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.redirect(`/products/${req.params.id}/detail`);
    },

    delete: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.redirect("/products");
    },

    /* getList:  (req, res) => {
        const products = getProducts();

        res.render("products/list", {
            products,
            toThousand,
        });
    },

    getOne: (req, res) => {
        const products = getProducts();
        const requiredProduct = products.find((prod) => {
            return prod.id == req.params.id;
        });

        if (requiredProduct == null) {
            return res.status(404).send("404 NOT FOUND.!");
        }

        res.render("products/detail", {
            product: requiredProduct,
            toThousand,
        });
    },

    showCreate: (req, res) => {
        res.render("products/create");
    },

    create: (req, res) => {
        const products = getProducts();
        const indiceUltimoProducto = products.length - 1;
        const elUltimoProducto = products[indiceUltimoProducto];
        const newId = elUltimoProducto.id + 1;

        const newProduct = {
            id: newId,
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            image: req.file.filename,
            category: req.body.category,
            size: req.body.size,
        };

        products.push(newProduct);
        saveProducts(products);

        res.redirect(`/products/${newId}/detail`);
    },

    showEdit: (req, res) => {
        const products = getProducts();
        const requiredProductToEdit = products.find((prod) => {
            return prod.id == req.params.id;
        });
        if (requiredProductToEdit == null) {
            return res.status(404).send("404 NOT FOUND!");
        }
        res.render("products/edit", { product: requiredProductToEdit });
    },

    edit: (req, res) => {
        const products = getProducts();

        const productCopy = products.find((prod) => {
            return prod.id == req.params.id;
        });

        console.log("productCopy", productCopy);

        var productToEdit = productCopy;

        const filename = req.file ? req.file.filename : productToEdit.image;
        const idEdit = req.params.id;

        (productToEdit.name = req.body.name),
            (productToEdit.description = req.body.description),
            (productToEdit.price = Number(req.body.price)),
            (productToEdit.discount = Number(req.body.discount)),
            (productToEdit.image = filename),
            (productToEdit.size = req.body.size),
            (productToEdit.category = req.body.category),
            console.log("productToEdit", productToEdit);

        console.log("products", products);

        saveProducts(products);

        res.redirect(`/products/${idEdit}/detail`);
    },

    delete: (req, res) => {
        const products = getProducts();

        const productToDelete = products.findIndex((prod) => {
            return prod.id == req.params.id;
        });

        products.splice(productToDelete, 1);

        saveProducts(products);

        res.redirect("/products");
    },
*/
};
