# Paso a Paso para dar inicio al proyecto.

> ## Creando app.js

---

1. Primero creamos el archivo app.js, luego hacemos npm init en la terminal para instalarlas librerias y crear el archivo package.json.

2. hacemos npm install express, se crea el archivo package-lock.json y la carpeta node_modules.

3. En archivo app.js requerimos express (const express = require('express')). Luego ejecuto la funcion express() almacenandola en una variable (const app = express()).

4. al objeto app le pedimos el metodo listen "app.listen()" para levantar el servidor. Este metodo recibe dos valores, el numero de puerto y un callback con un console.log para saber si el servidor se levato correctamente. Este ultimo es opcional.

-   `app.listen(3000, ())`

5. Al objeto app le pedimos el metodo .get el cual recibe 2 parametros. El primer parametro es un string que define la url de la ruta. El segundo, un callback con dos parametros: los objetos request(req) y response(res).

6. veo open workspace settings edit format onsave (poner true) y defaultFormat

7. al header margin: o y paddin: 0

8. banco de imagenes https://pixabay.com/es/, https://www.stickpng.com/, http://www.pngall.com/, https://pngtree.com/, https://freepngimg.com/, https://unsplash.com/, https://gratisography.com/

9. color para banner y/o img banner = #D70036

validator.isStrongPassword,
{
minLength: 8,
minLowercase: 1,
minUppercase: 1,
minNumbers: 1,
minSymbols: 1,
returnScore: false,
},
