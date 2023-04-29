import Card from '../Card/Card';
import { CardsContainer } from './StyledComponents';

export default function Cards(props) {
   const {characters} = props;
    return ( 
     <CardsContainer>
         {characters.map((characters) => {
          return (<Card
            id = {characters.id}
            name = {characters.name}
            species = {characters.species}
            gender = {characters.gender}
            image = {characters.image}
            status ={characters.status}
            origin = {characters.origin.name}
            onClose = {props.onClose}
          />
          );
        })}
     </CardsContainer>
   );
}
