
const validation = (userData, errors, setErrors) => {
    if(!userData.username) 
        setErrors({...errors, username: 'Por favor completa este campo'});
    else if(userData.username.length > 35)
        setErrors({...errors, username: 'No puede superar los 35 caracteres'});
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
    ){
        setErrors({...errors, username: 'Email invalido'});
    } else{
        setErrors({...errors, username: '' });

    }
    //password: if(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test())
    if(userData.password.length < 6 || userData.password.length > 10){
        setErrors({...errors, password: 'Longitud de password invalida'});
    } else if (!/\d/.test(userData.password)){
        setErrors({...errors, password: 'Debe contener al menos un numero'});
    } else{setErrors({...errors, password: ''});

    }
};

export default validation;

// melissa
// export default(data) => {
//     let errors = {}

//     if(!emailRefexp.test(data.email)){
//         errors.email = 'Debe ingresa un Email valido'
//     }

//     if(!data.email){

//     }

// }