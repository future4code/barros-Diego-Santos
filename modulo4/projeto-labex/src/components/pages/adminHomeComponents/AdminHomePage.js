import React,{useState} from "react";
import * as style from "../adminHomeComponents/styleAdminPage"
import * as MyConst from "../../constants/constants"
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../hoks/useRequestData";
import { useProtectedPage } from "../../hoks/useProtectedPage";
import {BiTrash} from "react-icons/bi"
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
  const [header, setHeader ] = useState( {headers: {auth: sessionStorage.getItem("token")}});
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
          <style.BtnAdmin> <BiTrash/></style.BtnAdmin>
        </style.DivBtnDel>
      </style.DivRenderTrip>
    )
  })

  return(
    <style.ContainerAdmHome>  
      <style.DivButtons className="DivbuttonTop">
        <style.BtnAdmin onClick={ logout }>logout</style.BtnAdmin >
        <style.BtnAdmin  onClick={ () => navigate("/admin/trips/create")}>Criar novas viagens</style.BtnAdmin > 
      </style.DivButtons>
      {/* <button onClick={ () => navigate("/trip")} */}
      <style.Title>Lista de Viagens</style.Title>
      { dataTripIsLoading && <style.Title>"...Carregando!!!"</style.Title> }
      {!dataTripIsLoading && dataTrip && <style.DivCentral> {renderListTrip} </style.DivCentral>}
      {!dataTripIsLoading && !dataTrip && erroDataTrip}
    </style.ContainerAdmHome>
    )
}