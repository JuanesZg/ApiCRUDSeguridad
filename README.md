Juan Esteban Londoño Gutiérrez
Ficha 2694133

-------------------------------------------- COMANDOS DOCKER --------------------------------------------

Crear el archivo Dockerfile
touch Dockerfile

Abrir el archivo para editarlo
nano Dockerfile

Configurar las credenciales
FROM mysql:8.0
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password
EXPOSE 3306

Crea el archivo docker-compose.yml
touch docker-compose.yml

Abrir el archivo para editarlo:
nano docker-compose.yml

Creacion del contenedor usando la imagen de mysql:
services:
  db:
    image: mysql:8.0
    container_name: mysql_container
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: mydatabase
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    ports:
      - "3306:3306"
    volumes:
      - ./mysql-data:/var/lib/mysql

Comando para levantar el contenedor:
docker-compose up -d

Verificar que el contenedor se haya levantado correctamente:
docker ps

Crear la tabla para los carros en la base de datos creada en el contenedor
CREATE TABLE cars (
  id INT AUTO_INCREMENT PRIMARY KEY,
  brand VARCHAR(50) NOT NULL,
  model VARCHAR(50) NOT NULL,
  year INT NOT NULL,
  color VARCHAR(30) NOT NULL
);

Comando para probar la inserción de un nuevo vehículo desde consola:
curl -X POST http://localhost:3000/cars -H "Content-Type: application/json" -d '{"brand":"Toyota", "model":"Corolla", "year":2021, "color":"Blue"}'

-------------------------------------------- COMANDOS GIT --------------------------------------------
**Se creo un archivo .gitignore para ignorar los modulos de node y los socket del contenedor mysql

git init
git remote add origin https://github.com/JuanesZg/ApiCRUDSeguridad.git
git add .
git commit -m "Implementacion de rutas CRUD para carros"
git push -u origin develop



