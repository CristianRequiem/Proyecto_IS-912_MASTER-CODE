//Importar el modulo express para crear el servidor web
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var dbConexion = require('./config/conexion_DB');

//Crear una aplicacion de nodejs con express
var app = express();

//middleware
//app.use(morgan('dev'));

//definir una carpeta como publica para que los usuarios puedan acceder a su contenido
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//Levantar el servidor en el puerto 3333
app.listen(3333, function(){
    console.log("Servidor levantado en el puerto 3333");
});
