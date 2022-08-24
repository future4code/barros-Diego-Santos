import React,{useState} from "react";
import * as style from "../adminHomeComponents/styleAdminPage"
import * as MyConst from "../../constants/constants"
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../hoks/useRequestData";
import { useProtectedPage } from "../../hoks/useProtectedPage";
import trash from "../../images/lixo.png"
import axios from "axios";

export const AdminHomePage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const [dataTrip , dataTripIsLoading, erroDataTrip] = useRequestData( `${MyConst.url}trips` )
  

  const logout = () => {
    localStorage.clear()
    navigate("/login")
  }
  // abaixo,pega as informações da viagem e envia para o localStorage ...
  const getDetailTrip = (tripName,tripId) => {
    localStorage.setItem("tripId",tripId)
    navigate(`/admin/trips/${tripName}`)
  }
  // ----------------------------------------------------------------------//

  // abaixo o botao de deletar ....
  const [header, setHeader ] = useState( {headers: {auth: localStorage.getItem("token")}});
  const deleteTrip = (tripName,tripId) => {
    axios
    .delete(`${MyConst.url}trips/${tripId}`,header)
    .then( (response) => {
      alert(tripName + " excluida com sucesso")
    })
    .catch( (error) => {
      alert("A viagem não foi excluida")
    })
  }
  // -------------------------------------------//

  const renderListTrip = dataTrip.trips && dataTrip.trips.map( (trip) => {
    return (
      <style.DivRenderTrip key={trip.id}  >
        <style.DivTrip  onClick={ () => getDetailTrip(trip.name,trip.id)}>
          <style.ListInfo> {trip.name} </style.ListInfo>  
        </style.DivTrip>
        <style.DivBtnDel onClick={ ()=> deleteTrip(trip.name,trip.id)}>
          <img src={trash} />
        </style.DivBtnDel>
      </style.DivRenderTrip>
    )
  })

  return(
    <style.ContainerAdmHome>  
      <style.DivButtons>
        <button onClick={ logout }>logout</button>
        <button onClick={ () => navigate("/admin/trips/create")}>Criar novas viagens</button> 
      </style.DivButtons>
      {/* <button onClick={ () => navigate("/trip")} */}
      <style.Title>Lista de Viagens</style.Title>
      { dataTripIsLoading && <h1>"...Carregando!!!"</h1> }
      {!dataTripIsLoading && dataTrip && renderListTrip }
      {!dataTripIsLoading && !dataTrip && erroDataTrip}
    </style.ContainerAdmHome>
    )
}