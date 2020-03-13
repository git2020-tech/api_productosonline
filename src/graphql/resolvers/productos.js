import Productos from '../../database/models/productos';
export default {
  Query: {
    getProducto: async (_, {_id}) => {
      try {
        const producto = await Productos.findOne({_id: _id});
        return producto;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    getProductos: async () => {
      try {
        const productos = await Productos.find();
        return productos;
      } catch (error) {
        console.log(error);
        return;
      }
    },
  },
  Mutation: {
    createProducto: async (_, {input}) => {
      try {
        const newProducto = new Productos(input);
        await newProducto.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    updateProducto: async (_, {_id, input}) => {
      try {
        await Productos.findOneAndUpdate(
          {_id: _id},
          {
            $set: input,
          }
        );
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    deleteProducto: async (_, {_id}) => {
      try {
        await Productos.findOneAndDelete({
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
