/**importar libreria**/
//importar libreria graphql-tools el metodo(makeExecutableSchema) para crear un esquema de graphQl.
import {makeExecutableSchema} from 'graphql-tools';
//permite mezclar diferentes tipos de esquemas de GraphQl.
import {fileLoader, mergeTypes, mergeResolvers} from 'merge-graphql-schemas';
//Libreria join sirve para concatenar la ruta de acuerdo al OS.
import {join} from 'path';
//permite leer archivos de extesion (.gql)
import 'graphql-import-node';
//libreria de TypeDefs del esquema general.
import schemaGql from './schema.gql';

////**TypeDefes**////
//obtener todos los TypesDefs (.graphql) y lo almacenamos en un array.
const arrayTypeDefs = fileLoader(join(__dirname, './typeDefs'), {
  extensions: ['.gql'],
});
//agregar a nuestro array typeDefs del schema general
arrayTypeDefs.push(schemaGql);
//mezclamos todos typeDefs en un solo archivo y retornamos y definimos como typeDefs.
const typeDefs = mergeTypes(arrayTypeDefs);

//////**resolvers**///////
//obtener todos los resolver (.js) y lo almacenamos en un array.
const arrayResolvers = fileLoader(join(__dirname, './resolvers'), {
  extensions: ['.js'],
});
//mezclamos todos resolvers en un solo archivo y definimos como resolver.
const resolvers = mergeResolvers(arrayResolvers);
//creamos un nuevo schema, pasamos los typeDefs y los resolvers y luego exportamos
export default new makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
