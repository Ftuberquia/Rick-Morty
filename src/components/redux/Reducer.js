import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./Actions"; // se quito REMOVE_COMPONENT_FAVORITES

const initialState = {
    myFavorites: [],
    allCharacter: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            case 'ADD_FAV':
         return { ...state, 
            myFavorites: action.payload, 
            allCharacter: action.payload 
        };

        case FILTER:
            let characterFilter =  state.allCharacter.filter((character) => character.gender === action.payload)

            return {
                ...state,
                myFavorites: characterFilter,
            }
        case ORDER:
            const orderCharacter = state.allCharacter.sort((a, b)=> {
                if(action.payload === "A") {
                    if(a.id < b.id ) return -1;
                    if(b.id < a.id) return 1
                    return 0
                }
                // DESCENDENTE
                else {
                    if(a.id < b.id) return 1
                    if(b.id < a.id) return - 1
                    return 0
                }
            
            })
            // console.log("caso order",orderCharacter);
          return {
            ...state,
            myFavorites: [...orderCharacter]
          }

          case REMOVE_FAV:
            return { 
                ...state,
                 myFavorites: action.payload 
                };
            
        //   case REMOVE_COMPONENT_FAVORITES:
        //     const removeFavorite = state.myFavorites.filter((char)=> char.id !== Number(action.payload) )
        //     return {
        //         ...state,
        //         myFavorites: removeFavorite
        //     }     **se elimino de app y actions**

        default:
            return {
                ...state
            }
    }

}

export default reducer;