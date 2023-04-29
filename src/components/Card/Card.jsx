import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/Actions";
import { useState, useEffect } from "react";

// depronto toque arreglar en estructurin de Card()
function Card(props) {  
   const{myFavorites, addFavorite, removeFavorite} = props;
   const [isFav, setIsFav] = useState(false);

   
   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFavorite(props.id); 
      } else{
         setIsFav(true);
         addFavorite(props)
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
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <button onClick={()=> props.onClose(props.id)} className={style.closeButton}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2> {props.name}</h2>
         </Link>
         
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
      addFavorite: (character) => {dispatch(addFavorite(character))},
      removeFavorite: (id) => {dispatch(removeFavorite(id))
      },
   };
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps) (Card);
