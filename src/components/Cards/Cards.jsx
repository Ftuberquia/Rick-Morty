import Card from '../Card/Card';
import { CardsContainer } from './StyledComponents';

export default function Cards(props) {
   const {characters, onClose} = props;
    return ( 
     <CardsContainer>
         {characters?.map((character) => {
          return (
          <Card
            key={character.id}
            id = {character.id}
            name = {character.name}
            species = {character.species}
            gender = {character.gender}
            origin = {character.origin.name}
            status ={character.status}
            image = {character.image}
            onClose = {onClose} //sino funciona poner .props
          />
          );
        })}
     </CardsContainer>
   );
}
