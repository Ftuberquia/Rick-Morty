import axios from "axios"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    

    useEffect(() => {
        axios
        .get(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response ) => {
            setCharacter(response.data);
           }) 
           .catch((error) => {
             console.log(error);
           });
           
     }, [id]);

     return(
        <div>
            {
            character.name? (
            <>
                <h2>{character.name}</h2>
                <p>{character.status}</p>
                <p>{character.species}</p>
                <p>{character.gender}</p>
                <p>{character.origin.name}</p>
                <img src={character.image} alt="img"/>
            </>
            ):(
                <h3>Loading...</h3>
            )}
            
        </div>
    );
};

export default Detail;



         