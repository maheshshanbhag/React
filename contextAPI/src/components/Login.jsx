import React, {useContext, useState } from 'react'
import userContext from '../context/useContext'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)


    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <input type='text' 
        placeholder='username'
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        />

        <input type='text' 
        placeholder='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login