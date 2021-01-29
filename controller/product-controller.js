//requiere getProducts.
const getProducts = require("../utils/getProducts");
const toThousand = require("../utils/to-thousand");
const saveProducts = require("../utils/save-products");

module.exports = {
    getList: (req, res) => {
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

        const newProduct = {
            id: products[products.length].id + 1,
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            image: req.body.image,
            category: req.body.category,
            size: req.body.size,
        };

        saveProducts(products);

        res.redirect("products/list");
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

        const productToEdit = products.find((prod) => {
            return prod.id == req.params.id;
        });

        const filename = req.file ? req.file.filename : productToEdit.image;

        productToEdit = {
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            image: filename,
            size: req.body.size,
            category: req.body.category,
        };

        saveProducts(products);

        res.redirect("/products/list");
    },

    delete: (req, res) => {
        const products = getProducts();

        const productToDelete = products.find((prod) => {
            return prod.id == req.params.id;
        });

        products.splice(productToDelete, 1);

        saveProducts(products);

        res.redirect("/products");
    },
};

/* create: (req, res) => {
    const products = getProducts();
    const indiceUltimoProducto = products.length - 1;
    const elUltimoProducto = products[indiceUltimoProducto];
    const newId = elUltimoProducto.id + 1;

    const product = {
        id: newId,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        discount: req.body.discount,
        ima */
