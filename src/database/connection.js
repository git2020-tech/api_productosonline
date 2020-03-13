//importando librerias de mongoose
import mongoose from 'mongoose';
import 'colors';

//varibles de la conexión a la BD.
const host = 'localhost'; //Host o direccion de la base de datos
const port = 27017; //El puerto que usa por defecto mongoDB.
const drivers = 'mongodb'; //drivers de mongoDB.
const db = 'productosonline'; //nombre de la base de datos.
const user = ''; //nombre de usuario a la base de datos en (localhost) se deja en blanco.
const pass = ''; //contraseña de acceso a la base de datos (Localhost)  se va en blanco
const opt = 'retryWrites=true&w=majority'; //opciones de base de datos se conecta automatica.
const uri = `${drivers}://${host}:${port}/${db}?${opt}`; //Uri para acceder o crear la conexion

const connection = async () => {
  const options = {
    useCreateIndex: true, // Habilitamos, para que mongoose pueda crear indexs
    useNewUrlParser: true, // Habilitar, para evitar un DeprecationWarning
    useUnifiedTopology: true, // Habilitar, para evitar un DeprecationWarning
    useFindAndModify: false, // Deshabilitar, para evitar un DeprecationWarning
    user: user, // Pasamos el user
    pass: pass, // Pasamos el password
  };
  // ## ¿Por qué no pasamos el user y password en el URI? ##
  // Porque existen errores si el user ó el password tienen caracteres especiales,
  // tales como:  @ " = : / $ & | ...... etc  (Como en nuestro caso...!!)
  try {
    await mongoose.connect(uri, options);
    console.log('Conexión a la base de datos exitosa'.white);
  } catch (error) {
    console.log(error.toString().red);
  }
};
export default connection;
