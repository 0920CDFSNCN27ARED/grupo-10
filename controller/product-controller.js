//requiere getPrducts.
const getProducts = require("../utils/getProducts");

module.exports = {
    getList: (req, res) => {
        res.render("product/list");
    },

    getOne: (req, res) => {
        if (req.params.id == null) {
            return res.status(404).send("404 NOT FOUND");
        }
        return res.render("product/detail");
    },
};
