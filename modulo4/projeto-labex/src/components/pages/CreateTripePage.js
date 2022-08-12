import React from "react";
import { useNavigate } from "react-router-dom";

export const CreateTripePage = () => {
    const navigate = useNavigate()
    return (
       <>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <p>criar viagem</p>
       </>
    )
}