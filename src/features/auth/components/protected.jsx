import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from 'react'

const Protected = ({children}) => {
    const {loading, user} = useAuth()
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
    if(!user){
        return <Navigate to={'/login'}/>
    }
    return children
}

export default Protected