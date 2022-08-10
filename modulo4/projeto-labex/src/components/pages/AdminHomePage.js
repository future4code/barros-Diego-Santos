import React from "react";
import { useNavigate } from "react-router-dom";
// import { ListTripPage } from "./ListTripsPage";

export const AdminHomePage = () => {

    const navigate = useNavigate()
    return(
        <>  
            <button onClick={ () => navigate(-1)}>logout</button>
            <button onClick={ () => navigate("/trip/list/admin")}>Exibir lista de viagens</button> 
            {/* <button onClick={ () => navigate("/trip")} */}
        </>
    )
}