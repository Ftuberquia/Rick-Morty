import { useState } from "react";
import validation from "./Validation";
import style from "./Form.module.css";

const Form = ({Login}) => {
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    });

    const [errors, setErrors] = useState({
        email:"",
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
        <div className={style.container} >   
            <form onSubmit={submitHandler}>
             {/* antes estaba ='form-container' */}
                <label htmlFor="email">Email: </label>
                <input 
                type="text" 
                placeholder="Ingresa tu Email"
                className={style.email}               
                name="email" 
                value={userData.email}
                onChange={handleInputChange}
                />
                <p>{errors.email}</p>              
            {/* </div>
            <div className="form-container">  */}
                <label htmlFor="password">Password: </label>
                <input 
                type="text" 
                placeholder="Contraseña"
                className={style.email}
                name="password" 
                value={userData.password} 
                onChange={handleInputChange}
                />
                 <button className={style.loginbutton}> Login</button>
             </form>
         </div>
    );
};

export default Form;

