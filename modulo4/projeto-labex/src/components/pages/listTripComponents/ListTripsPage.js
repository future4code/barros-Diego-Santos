import React from "react";
import { useNavigate } from "react-router-dom";
import { DivButtons, DivContainerTrips, DivListTrip, ListInfo, Span, Title } from "./styleTrips";

import { useRequestData } from "../../hoks/useRequestData";
import { url } from "../../constants/constants";

export const ListTripPage = () => {
  const navigate = useNavigate()
  const [dataTrip , dataTripIsLoading, erroDataTrip] = useRequestData( `${url}trips` )

  const renderListTrip = dataTrip.trips&&dataTrip.trips.map( (list) => {
    return (
      <DivListTrip key={list.id}>
        <ListInfo> <Span>Planeta:</Span> {list.planet} </ListInfo>
        <ListInfo> <Span>Nome:</Span> {list.name}</ListInfo>
        <ListInfo> <Span>Descrição:</Span> {list.description} </ListInfo>
        <ListInfo> <Span>Data:</Span> {list.date} </ListInfo>
        <ListInfo> <Span>Duração:</Span> {list.durationInDays} Dias </ListInfo>
      </DivListTrip>
    )
  })   
   

  return(
    <DivContainerTrips>
      <DivButtons>
        <button onClick={ () => navigate("/")}>Voltar</button>
        <button onClick={ () => navigate("/trip/application")}>inscrever-se para viagem</button>
      </DivButtons>
      <Title>Lista de Viagens</Title>
      { dataTripIsLoading && <h1>"...Carregando!!!"</h1> }
      {!dataTripIsLoading && dataTrip && renderListTrip }
      {!dataTripIsLoading && !dataTrip && erroDataTrip}
    </DivContainerTrips>
  )  
}


// isso aqui foi um teste depois eu apago caso nao va ser ultilizado
// const pathParams = useParams()
    // const logged = pathParams.user;
    // return(
    //     <>
    //         { logged === "admin" ? 
    //             <p>exibir lista para o  usuario admin</p> 
    //         : 
    //             <>
    //                 <p> Para vermos todas as viagens </p>
    //                 <button onClick={ () => navigate(-1)}>Voltar</button>
    //                 <button onClick={ () => navigate("/trip/application")}>inscrever-se para viagem</button>
    //             </>
    //         }
    //     </>
    // ) 