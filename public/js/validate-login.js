let errors = [];

window.addEventListener("load", () => {
    const form = document.getElementById("login-form");
    form.addEventListener("submit", (e) => {
        errors = [];

        clearErrors();
        let email = document.getElementById("email");
        let password = document.getElementById("password");

        validateEvent(email, "El email es invalido o no existe");
        validateEvent(password, "Contraseña incorrecta");

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
