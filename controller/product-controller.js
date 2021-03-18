const db = require("../db/models");
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
            imagenes: req.file[0].filename,
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
            res.render("products/edit", { product: product });
        });

        if (req.params.id == null) {
            return res.status(404).send("404 NOT FOUND!");
        }
    },

    edit: (req, res) => {
        db.Products.update(
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                discount: req.body.discount,
                /* id_category: req.body.id_category, */
                image: req.files[0].filename,
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
};
