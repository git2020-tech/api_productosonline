//importamos el modelo de la coleccion marcas
import Marcas from '../../database/models/marcas'; 
//creamos los resolver y exportamos
export default {
  Query: {
    getMarcas: async () => {
      try {
        const marcas = await Marcas.find();
        return marcas;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
  Mutation: {
    createMarca: async (_, {nombre}) => {
      try {
        const newMarcas = new Marcas({nombre: nombre});
        await newMarcas.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    deleteMarca: async (_, {_id}) => {
      try {
        await Marcas.findOneAndDelete({
          _id: _id,
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
