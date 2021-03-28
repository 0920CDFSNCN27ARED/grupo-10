let errors = [];

window.addEventListener("load", () => {
    const form = document.getElementById("register-form");
    form.addEventListener("submit", (e) => {
        errors = [];

        clearErrors();
        let name = document.getElementById("name");
        let lastName = document.getElementById("last-name");
        let date = document.getElementById("date");
        let username = document.getElementById("username");
        let email = document.getElementById("email");
        let password = document.getElementById("password");

        validateEvent(name, "El campo de nombre no puede estar vacio");
        validateEvent(lastName, "El campo de apellido no puede estar vacio");
        validateEvent(
            date,
            "El campo de fecha de nacimiento no puede estar vacio"
        );
        validateEvent(username, "Debe crear un usuario");
        validateEvent(email, "El campo de mail no puede estar vacio");
        validateEvent(password, "Debe crear una contraseña");

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
