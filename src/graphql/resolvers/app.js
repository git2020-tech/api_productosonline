//importamos el modelo de la coleccion app
import Apps from '../../database/models/app';
//creamos los resolver y exportamos
export default {
  Query: {
    getApps: async () => {
      try {
        const apps = await Apps.find();
        return apps;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  Mutation: {
    createApp: async (_, {nombre, logo}) => {
      try {
        const newApp = new Apps({nombre: nombre, logo: logo});
        await newApp.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    deleteApp: async (_, {_id}) => {
      try {
        await Apps.findOneAndDelete({
          _id: _id,
        });
        return true;
      } catch (error) {
        console.log(error);
        return true;
      }
    },
  },
};
