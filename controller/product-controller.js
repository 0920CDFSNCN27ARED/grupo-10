//requiere getProducts.
const getProducts = require("../utils/getProducts");
const toThousand = require("../utils/to-thousand");
const path = require("path");

module.exports = {
    getList: (req, res) => {
        const products = getProducts();

        res.render("product/list", {
            products,
            toThousand,
        });
    },

    getOne: (req, res) => {
        const products = getProducts();

        if (req.params.id == null) {
            return res.status(404).send("404 NOT FOUND.!");
        }

        products.forEach((prod, i) => {
            if (prod[i].id == req.params.id) {
                return prod[i];
            }
        });

        return res.render("products/:id/detail");
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
            image: req.body.img,
            category: req.body.category,
            size: req.body.size,
        };

        products.push(newProduct);

        const productsJSON = JSON.stringify(products);
        fs.writeFileSync(path.resolve(__dirname, "../db.json"), productsJSON);

        res.redirect("products/list");
    },

    showEdit: (req, res) => {
        const products = getProducts();
        const requiredProduct = products.find((prod) => {
            return prod.id == req.params.id;
        });
        if (requiredProduct == null) {
            return res.status(404).send("404 NOT FOUND!");
        }
        res.render("products/edit", { product: requiredProduct });
    },

    edit: (req, res) => {
        const products = getProducts;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == req.params.id) {
                products[i] = editedProduct;
            }
        }

        const editedProduct = {
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            image: req.body.file,
        };

        products.push(editedProduct);

        const editedJSON = JSON.stringify(editedProduct);
        fs.writeFileSync(path.resolve(__dirname + "../db.json"), editedJSON);

        res.redirect("/products/list");
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
