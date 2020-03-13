//importar la libreria de mongoose
import {Schema, model} from 'mongoose';

//modelo de schema
//referenciar el objectId siempre cuando es (ID).
const ObjectId = Schema.Types.ObjectId;
const schema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    categoria: {
      _id: ObjectId,
    },
    marca: {
      _id: ObjectId,
    },
    descripcion: String,
    precio: Number,
    url_img: String,
    caracteristicas: [
      {
        descripcion: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    collection: 'productos', //nombre de la coleccion
    timestamps: true, //registra fecha y hora de la actualizacion de forma automatica
  }
);

//exportar el modelo de nuestra conexion pasando el nombre de la collecion y constante schema correspondiente
export default model('productos', schema);
