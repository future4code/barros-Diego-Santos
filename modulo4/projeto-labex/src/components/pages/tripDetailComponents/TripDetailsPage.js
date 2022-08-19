import React, { useState } from "react";
import * as MyConst from "../../constants/constants"
import * as style from "../tripDetailComponents/styleTripDetails"
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hoks/useProtectedPage";
import { useRequestData } from "../../hoks/useRequestData";


export const TripDetailsPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const [header, setHeader ] = useState( {headers: {auth: localStorage.getItem("token")}})
  const [tripId, setTripId ] = useState( localStorage.getItem("tripId"))
  const [dataTrip , dataTripIsLoading, erroDataTrip] = useRequestData( `${MyConst.url}trip/${tripId}/`,header)
    
  console.log(dataTrip)
  
  return(
    <style.ContainerTripDetails>
      <button onClick={() => navigate("/admin/trip/list")}>voltar</button>
      <p>lista detalhada</p>
    </style.ContainerTripDetails>
    )
}