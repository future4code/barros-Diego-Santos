import React from "react";
import { useNavigate } from "react-router-dom";
export const TripDetailsPage = () => {
    const navigate = useNavigate()
    return(
        <>
         <button onClick={() => navigate(-1)}>voltar</button>
         <p>lista detalhada</p>
        </>
    )
}