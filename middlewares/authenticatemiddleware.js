const db = require("../db/models");
//Middleware para verificar existencia de usuario logueado VS Base de Datos
async function authenticatemiddleware(req, res, next) {
    const id = req.session.loggedUserId;
    console.log(id);

    if (!id) return next();

    const loggedUser = await db.Users.findByPk(id);
    if (!loggedUser) {
        delete req.session.loggedUserId;
        return next();
    }

    req.loggedUser = loggedUser;

    res.locals.user = loggedUser;
    console.log(req.loggedUser);
    next();
}

module.exports = authenticatemiddleware;
