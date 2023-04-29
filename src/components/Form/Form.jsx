import { useState } from "react";
import validation from "./Validation";
import style from "./Form.module.css";

const Form = ({Login}) => {
    const [userData, setUserData] = useState({
        username:'',
        password:'',
    });

    const [errors, setErrors] = useState({
        username:"",
        password:"",
    })

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

    setUserData({...userData, [property]:value});
    validation({...userData, [property]:value}, errors, setErrors);

    };

    const submitHandler = (event)=>{
        event.preventDefault();
        Login(userData);
    };

    return(
        <form onSubmit={submitHandler}>
            <div >
                <label htmlFor="username">Email: </label>
                <input 
                type="text" 
                placeholder="Ingresa tu Email"
                className={style.email}               
                name="username" 
                value={userData.username}
                onChange={handleInputChange}
                />
                <p>{errors.username}</p>              
            </div>
            <div> 
                <label htmlFor="password">Password: </label>
                <input 
                type="text" 
                placeholder="Contraseña"
                className={style.email}
                name="password" 
                value={userData.password} 
                onChange={handleInputChange}
                />
            </div>
            <button className={style.loginbutton}> Login</button>
        </form>
    );
};

export default Form;

