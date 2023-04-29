import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorites = () => {
    const favorites = useSelector((state)=>state.myFavorites);

    return(
        <>
           { favorites.map(({props})=>{
                return <Card
                id = {props.characters.id}
                name = {props.characters.name}
                species = {props.characters.species}
                gender = {props.characters.gender}
                image = {props.characters.image}
                status ={props.characters.status}
                origin = {props.characters.origin.name}
              />
            })}
        </>
    )
};

export default Favorites;