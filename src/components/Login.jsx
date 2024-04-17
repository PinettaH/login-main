import { useState } from 'react'
import { TextField } from '@mui/material'
import "../stylesheets/Login.css"
import authApi from '../api/authApi';
import { useForm } from '../hooks/useForms';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

function Login() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);


    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
        setShowRegisterForm(false);
    };

    const toggleRegisterForm = () => {
        setShowRegisterForm(!showRegisterForm);
        setShowLoginForm(false);
    };

    const loginSubmit = async (event) => {
        console.log(loginEmail, loginPassword)
        event.preventDefault();
        try {
            const data = await authApi.post('/auth/login', { loginEmail, loginPassword })
            console.log(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='w-full bg-slate-600'>



                <div class="container">
                    <div class="main">
                        <div class="login">
                            <button className='button' onClick={toggleLoginForm}>inciar Sesion</button>
                            {showLoginForm && (
                                <form class="form-login" onSubmit={loginSubmit}>

                                    <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" name='loginEmail' value={loginEmail} onChange={onLoginInputChange} />
                                    <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" name='loginPassword' value={loginPassword} onChange={onLoginInputChange} />
                                    <button type='submit' className=' hover:bg-slate-500 rounded-lg' >iniciar sesion</button>

                                </form>
                            )}
                            <div class="register">
                                <button className='button' onClick={toggleRegisterForm}>Registrarse</button>
                                {showRegisterForm && (
                                    <form class="form-register" onSubmit={registerSubmit}>
                                        <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" />
                                        <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" />
                                        <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" />
                                        <button type='submit' className=' hover:bg-slate-500 rounded-lg'>Registrarse</button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
