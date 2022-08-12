import React from "react";
import { useNavigate } from "react-router-dom";
// import { ListTripPage } from "./ListTripsPage";

export const AdminHomePage = () => {

    const navigate = useNavigate()
    return(
        <>  
            <button onClick={ () => navigate("/login")}>logout</button>
            <button onClick={ () => navigate("/admin/trips/id")}>Ver detalhes da lista</button>
            <button onClick={ () => navigate("/admin/trips/create")}>Criar novas viagens</button> 
            {/* <button onClick={ () => navigate("/trip")} */}
        </>
    )
}