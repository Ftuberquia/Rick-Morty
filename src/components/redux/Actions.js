import axios from "axios";
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const REMOVE_COMPONENT_FAVORITES = 'REMOVE_COMPONENT_FAVORITES';

export const addFav = (character) => {
   try{
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
       return async(dispatch) => {
         const { data } = await axios.post(endpoint, character)
            return dispatch({
               type: ADD_FAV,
               payload: data,
            });
         }
      }
      catch (error) {
         return {error: error.message}
      }
}

 export const removeFav = (id) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async(dispatch) => {
         const { data } = await axios.delete(endpoint)
            return dispatch({
               type: REMOVE_FAV,
               payload: data,
            });
         };   
      } catch (error) {
         return {error: error.message}
      }
 };

export const filterCards = (gender) => {
    return{
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return{
        type: ORDER,
        payload: order
    }
}

// export const removeComponentFavorites = (id) => { se elimino esta accion
//    return {
//       type: REMOVE_COMPONENT_FAVORITES,
//       payload: id
//    }
// }