const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const productRouter = require("./routes/product-router");
const usersRouter = require("./routes/users-router");

app.listen(3000, () => {
    console.log("Servidor funcionando en puerto 3000");
});

app.get("/", (req, res) => {
    res.render("index");
});

app.use("/products", productRouter);
app.use("/users", usersRouter);

app.get("/cart", (req, res) => {
    res.render("productCart");
});
