//importar la libreria de mongoose
import {Schema, model} from 'mongoose';

//modelo de schema
const schema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    logo: String,
  },
  {
    collection: 'app', //nombre de la coleccion
    timestamps: true, //registra fecha y hora de la actualizacion de los registros
  }
);

//exportar el modelo de nuestra conexion pasando el nombre de la collecion y constante schema correspondiente
export default model('app',schema); 