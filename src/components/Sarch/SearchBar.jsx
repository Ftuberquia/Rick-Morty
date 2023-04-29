import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
   let [id, setId] = useState("");

   // const handleEnter = (event) => {
   //    if (event.key === 'Enter') {
   //       props.onSearch(id);
   //    }
   // }

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.bar}>
         <input 
         type='search' 
         placeholder="busca un personaje" 
         className={style.searchInput} 
         onChange={handleChange}
         // onKeyUp={handleEnter}
         value={id}
         />
         <button 
            className={style.searchButton}
            onClick={()=> props.onSearch(id)}>Agregar</button>
      </div>
   );
}
