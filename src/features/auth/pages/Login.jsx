import React from 'react'
import "../auth.form.scss"
import { useNavigate,Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'
const Login = ()=> {

    const { loading, handleLogin} = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
    e.preventDefault()
    await handleLogin({email,password})
    navigate('/dashboard')
}

    if(loading){
    return (
        <main className="loading-screen">
            <div className="loader">
                <div className="loader__ring"></div>
                <div className="loader__ring loader__ring--delay"></div>
                <div className="loader__core"></div>
            </div>
            <p className="loader__label">
                Loading<span className="loader__dots"><span>.</span><span>.</span><span>.</span></span>
            </p>
        </main>
    )
}

    return(
        <main>
            <div className='form-container'>
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input 
                        onChange={(e)=>{setEmail(e.target.value)}}
                        type="email" name='email' placeholder='Enter email address' />
                    </div>
                    <div className="input-group">
                       <label htmlFor='password'>Password</label>
                        <input
                        onChange={(e)=>{setPassword(e.target.value)}}
                        type="password" name='password' placeholder='Enter password' />  
                    </div>
                    <button className='button primary-button'>Login</button>
                </form>
                <p>Don't have an account?<Link to={"/register"}>Register</Link></p>
            </div>
        </main>
    )
}

export default Login