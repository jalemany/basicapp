## Para instalar un servidor de JSON "fake" en un nuevo proyecto...

1.- npm install --save json-server

2.- Se deben crear la carpeta api con los ficheros db.json y routes.json

- En db.json escribimos nuestro modelo. Con datos de calidad.
- En routes.json incorporamos el nombre base del end-point

   "/api/*":"/$1"

3.- Se debe crear un script en package.json

- "api": "json-server api/db.json --routes api/routes.json --no´cors=true"

4.- Para levantar el servicio (el backend de "mentira")

- npm run api

5- El servicio se levanta por defecto en el puerto 3000

- http://localhost:3000/api/clientes
- http://localhost:3000/api/productos

6.- Documentación de json-server:

 - https://github.com/typicode/json-server/blob/master/README.md
 - https://blog.angulartraining.com/fake-your-angular-backend-until-you-make-it-8d145f713e14
