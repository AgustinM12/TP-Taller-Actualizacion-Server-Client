Integrantes del grupo: 
- Mazza Walter Agustin
- Acosta Gabriel 

Division de tareas:
Base de datos: Agustin Mazza
Desarrolle una base de datos sencilla con MySQL que constaba de 2 tablas (alumnos y profesores) con 3 atributos, nombre, apellido y materia en el caso de los profesores y nombre, apellido y calificado para los alumnos

Cliente: Agustin Mazza
Me encargue del desarrollo de un front end sencillo utilizando la libreria Tailwind para estilizar y Js para las funciones que realizacn peticiones al servidor y las que se ejecutan en el cliente.

Servidor: Gabriel Acosta 
En mi caso, me encargue de desarollar un servidor con JavaScript, utilizando el entorno de ejecución node.js y el framework express, que me brinda un marco de trabajo mas sencillo para montar un servicio. Tambien, me encargué de realizar la ruta correspondiente para la comunicación entre el cliente y la base de datos, sirviendo los datos en formato json con su respectivo controlador de alumnos y profesores.
Para poder realizar el controlador que tiene las funciones que hacen consultas a la base de datos, utilicé la ORM sequelize, utilzando su metodo de authenticate para la conexión y el metodo query() para enviar la consulta.

Red de interconexiones: Gabriel Acosta - Agustin Mazza
Para poder llevar a cabo la conexión entre Cliente - Servidor, montamos una red local utilizando el "mobile hostpot" del celular, que permite "crear" una red local. Una vez conectados a la red, verificamos la ip asignada al servidor para que el cliente pueda realizar las peticiones/consultas. Tambien, configuramos el usuario root de mysql con el programa "Laragon" que brinda un servidor de mysql con un cliente que permite modificar el permiso del usuario para poder acceder desde cualquier ip, esto permitia que el backend pueda hacer consultas a la bd y servir estos datos al cliente.

 
