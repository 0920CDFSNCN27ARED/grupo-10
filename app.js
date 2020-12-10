const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));

const productRouter = require("./routes/product-router");

app.listen(3000, () => {
    console.log("Servidor funcionando en puerto 3000");
});

app.get("/", (req, res) => {
    res.render("index");
});

app.use("/products", productRouter);

app.get("/cart", (req, res) => {
    res.render("productCart");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});
