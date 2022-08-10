import React from "react";
import { useNavigate } from "react-router-dom";

export const ApplicationFormPage = () => {

    const navigate = useNavigate()
    return (
        <>
            <p>Formulario de inscriçao para viagem</p>
            <button onClick={ () => navigate(-1)}>Voltar</button>
        </>
    )
}