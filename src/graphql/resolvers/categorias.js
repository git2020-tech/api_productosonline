//importamos el modelo de la coleccion categorias
import Categorias from '../../database/models/categorias';

export default {
  Query: {
    getCategorias: async () => {
      try {
        const categorias = await Categorias.find();
        return categorias;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },

  Mutation: {
    createCategoria: async (_, {nombre, icono}) => {
      try {
        const newCategorias = new Categorias({nombre: nombre, icono: icono});
        await newCategorias.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    deleteCategoria: async (_, {_id}) => {
      try {
        await Categorias.findOneAndDelete({
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
