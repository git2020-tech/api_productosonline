//**Importar las librerias **//
import express, {json, urlencoded} from 'express'; //Libreria de express
import {createServer} from 'http'; //Libreria nativa de express
import {join} from 'path'; //Libreria join sirve para concatenar la ruta de acuerdo al OS.
import 'colors'; //Para dar colores texto de la consola

/**Libreria de Middlewares */

import morgan from 'morgan'; //sirve para ver todos las peticiones http
import cors from 'cors'; //Permite pedir peticiones de otros servidores o dominios
import cookieParser from 'cookie-parser'; //permite leer los cookies dentro del http

/**Libreria de Apollo */

import {ApolloServer} from 'apollo-server-express'; //ApolloServer que contiene un gestor para probar la API de forma integral
import schema from './graphql/schema'; //importar el schema del graphQL.
import database from './database/connection'; //importar la conexion de la base de datos

//Declarar una constante
//Guardar nuestra app inicializada con express
const app = express();

//**Middlewares**//
//app.use(morgan('dev'));
app.use(json());
//permite decodificar rutas
app.use(
  urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use('*', cors()); //permiter hacer peticiones de diferentes dominios
app.use(express.static(join(__dirname, '../public')));

//variables generales de la APP
export const appPort = 4000;
export const appHost = 'http://localhost';
export const appName = 'API GraphQL';

//inicializar servidor de apoyo
const server = new ApolloServer({
  schema: schema,
  introspection: true, // Habilita instrospeccion de schema
  playground: true, // Habilita el playground de apollo
});
server.applyMiddleware({
  app,
});

app.use('/', (req, res) => {
  res.redirect('/');
});

database(); //nos conectamos a la base de datos

//creando el servidor de http con las funcionalidades de express
const httpServer = createServer(app);

//Arrancar el servidor http
httpServer.listen(appPort, () => {
  console.log(appName.blue);
  console.log(
    `Servidor funcionando `.yellow + `${appHost}:${appPort}/graphql`.green
  );
});
