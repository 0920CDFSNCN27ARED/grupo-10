const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));

// MAKES WORK OUT, PUT AND DELETE

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// FORM PROCESSING

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES REQUIRE

const productRouter = require("./routes/product-router");
const usersRouter = require("./routes/users-router");
/* const getProducts = require("./utils/getProducts"); */
const toThousand = require("./utils/to-thousand");
const getUsers = require("./utils/get-users");
const db = require("./db/models");

// VIEWS VARIBLE

app.locals.toThousand = toThousand;

// PORT

app.listen(3000, () => {
    console.log("Servidor funcionando en puerto 3000");
});

// ROUTES

app.get("/", (req, res) => {
    /* const products = getProducts(); */
    res.render("index", { products: db.Products });
});

app.use("/products", productRouter);

app.use("/users", usersRouter);

app.get("/cart", (req, res) => {
    res.render("productCart");
});

/* const session = require("express-session");

app.use(session({ secret: "nuestro mensaje secreto" }));
 */
