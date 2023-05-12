import { Link, useLocation } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav} from "../redux/Actions";
import { useState, useEffect } from "react";

// depronto toque arreglar en estructurin de Card()
function Card(props) {  
   const{myFavorites, addFav, removeFav, onClose} = props;
   const { pathname } = useLocation()
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(props.id); 
      } else{
         setIsFav(true);
         addFav(props)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
             ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <div >
            {
               !pathname.includes('/favorites') &&
            <button
            onClick={()=> props.onClose(props.id)} className={style.closeButton}
            >
                  X
            </button>
         }  
         <Link to={`/detail/${props.id}`}>
            <h2> {props.name}</h2>
         </Link>
         </div>
         
         <img src={props.image} alt={props.name}/>
         <h2>{props.status}</h2>
         <h2>Specie: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>{props.origin.name}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))
      },
   };
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps) (Card);
