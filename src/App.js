import axios from 'axios';
import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/About.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
// import { useDispatch } from 'react-redux'; **se quito
// import { removeComponentFavorites} from './components/redux/Actions.js' la quitamos

function App() {
   let [characters, setCharacters] = useState([]);

   // const dispatch = useDispatch()  ***se quito
   
   // CREDENCIALES FAKE
   const [access, setAccess] = useState(false);
   // const email = 'frank.tuberquia@gmail.com';
   // const password = 'fatu123';

   const {pathname} = useLocation();
   const navigate = useNavigate();
   
   // EVENT HANDLERS
   async function onSearch(id) {
      try {
          const url = 'http://localhost:3001/rickandmorty/character/' + id
      
          const { data } = await axios(url)
          const char = characters?.find(e => e.id === Number(data.id))
    
          if (char) {
            alert("Already in the list") 
          } 
          else if(data.id !== undefined) {
            setCharacters(characters => [...characters, data]);
          }
      
          else {
            alert('Character not found');
          }
    
      } 
      
       catch (error) {
        return { error: error.message};
      } 
    }
   

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const QUERY = `?email=${email}&password=${password}`

         const { data } = await axios(URL + QUERY);
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
         }
      catch(error){
         return { error: error.message};
      }
   }

      useEffect(() => {
         !access && navigate('/')
      }, [access, navigate]);
   
   const onClose = (id) => {
      setCharacters(
         characters.filter((character) => character.id !== id)); //sino funcion agragar Number(id) al ultimo

         // dispatch(removeComponentFavorites(id)) ***se elimino junto de actions
      };
   
      return (      
         <div className={style.body}>
         {pathname !== '/' && 
         <Nav onSearch = {onSearch}/>}
         <Routes>
            <Route path="/" element={<Form Login={login}/>}/>
            <Route 
               path="/home" element={<Cards characters={characters} onClose={onClose}/>} 
            />
           <Route path="/about" element={<About/>}/>
           <Route path="/favorites" element={<Favorites/>}/>
           <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
      </div>
   );

}

export default App;




