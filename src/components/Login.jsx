import { useState } from 'react'
import { TextField } from '@mui/material'
import "../stylesheets/Login.css"

function Login() {
    const [showRegisterForm, setShowRegisterForm] = useState(false)
    const toggleRegisterForm =() => {
        setShowRegisterForm(!showRegisterForm)
    }
    const [showLoginForm, setShowLoginForm] = useState(false)
    const toggleLoginForm =() => {
        setShowLoginForm(!showLoginForm)
    }

return (

        <div class="container">
            <div class="main">
                <div class="login">
                <button className='button' onClick={toggleLoginForm}>inciar Sesion</button>
            {showLoginForm && (
                    <form class="form-login">
                        
                        <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" />
                        <button className=' hover:bg-slate-500 rounded-lg'>iniciar sesion</button>
                        
                    </form>
            )}
                    <div class="register">
                    <button className='button' onClick={toggleRegisterForm}>Registrarse</button>
            {showRegisterForm && (
                        <form class="form-register">
                            <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField className='input' id="outlined-basic" label="Outlined" variant="outlined" />
                            <button className=' hover:bg-slate-500 rounded-lg'>Registrarse</button>
                        </form>
            )}
                    </div>
                </div>
            </div>
        </div>
)
}

export default Login
