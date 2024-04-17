import { useState } from 'react'
import { TextField } from '@mui/material'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard1 from './components/Dashboard1'
import Login from './components/Login'


function App() {


return (
    <div className='flex h-full w-full'>
        {/* <Sidebar />
        <Dashboard1/>  */}
        <Login/>
        
    </div>
        
)
}

export default App
