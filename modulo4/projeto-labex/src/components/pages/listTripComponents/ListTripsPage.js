import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "../listTripComponents/styleTrips";
import { useRequestData } from "../../hoks/useRequestData";
import { url } from "../../constants/constants";

export const ListTripPage = () => {
  const navigate = useNavigate()
  const [dataTrip , dataTripIsLoading, erroDataTrip] = useRequestData( `${url}trips` )

  const renderListTrip = dataTrip.trips&&dataTrip.trips.map( (list) => {
    return (
      <style.DivListTrip key={list.id}>
        <style.ListInfo> <style.Span>Planeta:</style.Span> {list.planet} </style.ListInfo>
        <style.ListInfo> <style.Span>Nome:</style.Span> {list.name}</style.ListInfo>
        <style.ListInfo> <style.Span>Descrição:</style.Span> {list.description} </style.ListInfo>
        <style.ListInfo> <style.Span>Data:</style.Span> {list.date} </style.ListInfo>
        <style.ListInfo> <style.Span>Duração:</style.Span> {list.durationInDays} Dias </style.ListInfo>
      </style.DivListTrip>
    )
  })   
   
  return(
    <style.DivContainerTrips>
      <style.DivButtons>
        <style.Button onClick={ () => navigate("/trip/application")}>inscrever-se para viagem</style.Button>
        <style.Button className="btnToBack" onClick={ () => navigate("/")}>Voltar</style.Button>
      </style.DivButtons>
      <style.Title>Lista de Viagens</style.Title>
      <style.DivCentral>
        { dataTripIsLoading && <style.Title>"...Carregando!!!"</style.Title> }
        {!dataTripIsLoading && dataTrip && renderListTrip }
        {!dataTripIsLoading && !dataTrip && erroDataTrip}
      </style.DivCentral>
    </style.DivContainerTrips>
  )  
}
