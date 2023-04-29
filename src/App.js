import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useEffect, useState } from 'react';
import style from './App.module.css';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';

function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

// CREDENCIALES FAKE
   const username = 'frank.tuberquia@gmail.com';
   const password = 'fatu123';

// EVENT HANDLERS
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => char.id !== id));
      };
   
   const login = (userData) => {
      if(userData.username === username && userData.password === password){
         setAccess(true);
         navigate('/home');
      } else{
         alert('Credenciales incorrectas');
      }
   };
      
      
      return (      
         <div className={style.body}>
         {pathname !== '/' && <Nav onSearch = {onSearch}/>}
         <Routes>
            <Route path="/" element={<Form Login={login}/>}/>
            <Route 
               path="/home" 
               element={<Cards characters={characters} onClose={onClose}/>} 
            />
           <Route path="/about" element={<About/>}/>
           <Route path="/favorites" element={<Favorites/>}/>
           <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
      </div>
   );

}

export default App;




