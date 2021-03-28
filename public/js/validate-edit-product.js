let errors = [];

window.addEventListener("load", () => {
    const form = document.getElementById("edit-product-form");
    form.addEventListener("submit", (e) => {
        errors = [];

        clearErrors();
        let name = document.getElementById("name");
        let description = document.getElementById("description");
        let price = document.getElementById("price");
        let discount = document.getElementById("discount");

        validateEvent(name, "Debe asignar un nombre al producto");
        validateEvent(description, "Agregue una descripción del producto");
        validateEvent(price, "Debe agregar un precio");
        validateEvent(discount, "Debe agregar un descuento, sino, coloque 0");

        if (errors > 0) {
            e.preventDefault();
        }
    });
});

function clearErrors() {
    let errorBox = document.querySelector("div#errors-list ul");
    if (errorBox) {
        errorBox.innerHTML = "";
    }
}

function validateEvent(query, msg) {
    if (query.value == "") {
        errors.push(msg);
    }
}
