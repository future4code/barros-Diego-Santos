import React from "react";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
    const navigate = useNavigate()

    return(
        <>
            <p>Area de login</p>
            <button onClick={ () => navigate(-1)}>voltar</button>
            <button onClick={ () => navigate("/admin/home/page")}>Login</button>
        </>
        
    )
}