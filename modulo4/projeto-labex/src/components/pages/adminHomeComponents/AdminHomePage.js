import React,{useState} from "react";
import * as style from "../adminHomeComponents/styleAdminPage"
import * as MyConst from "../../constants/constants"
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../hoks/useRequestData";
import { useProtectedPage } from "../../hoks/useProtectedPage";

export const AdminHomePage = ({IdTrip}) => {
  useProtectedPage()
  const navigate = useNavigate()
  const [dataTrip , dataTripIsLoading, erroDataTrip] = useRequestData( `${MyConst.url}trips` )
  const [test,setTest] = useState("")


  const detailTrip = (tripName,tripId) => {
    localStorage.setItem("tripId",tripId)
    navigate(`/admin/trips/${tripName}`)
  }

  const renderListTrip = dataTrip.trips && dataTrip.trips.map( (trip) => {
    return (
      <style.DivTrip key={trip.id} onClick={ () => detailTrip(trip.name,trip.id)}>
        <style.ListInfo> {trip.name} </style.ListInfo>  
      </style.DivTrip>
    )
  })

  return(
    <style.ContainerAdmHome>  
      <button onClick={ () => navigate("/login")}>logout</button>
      {/* <button onClick={ () => navigate(`/admin/trips/${tripId}`)}>Ver detalhes da lista</button> */}
      <button onClick={ () => navigate("/admin/trips/create")}>Criar novas viagens</button> 
      {/* <button onClick={ () => navigate("/trip")} */}
      <style.Title>Lista de Viagens</style.Title>
      { dataTripIsLoading && <h1>"...Carregando!!!"</h1> }
      {!dataTripIsLoading && dataTrip && renderListTrip }
      {!dataTripIsLoading && !dataTrip && erroDataTrip}
    </style.ContainerAdmHome>
    )
}