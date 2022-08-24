import React, { useEffect, useState } from "react";
import * as MyConst from "../../constants/constants"
import * as style from "../tripDetailComponents/styleTripDetails"
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hoks/useProtectedPage";
import { useRequestData } from "../../hoks/useRequestData";



export const TripDetailsPage = () => {
  useProtectedPage()
  const navigate = useNavigate();
  const [header, setHeader ] = useState( {headers: {auth: localStorage.getItem("token")}});
  const [tripId, setTripId ] = useState( localStorage.getItem("tripId"));
  const [data, isLoading, erroData] = useRequestData( `${MyConst.url}trip/${tripId}/`,header);
  
  
  
  // -------------------------------------------------------------------------------//
  const candidates = data && data.trip && data.trip.candidates.map( (candidate) => {
    return(
      <style.DivCandidate key={candidate.id}>
        <style.CandidateInfo>Nome: {candidate.name}</style.CandidateInfo>
        <style.CandidateInfo>Idade: {candidate.age}</style.CandidateInfo>
        <style.CandidateInfo>País: {candidate.country}</style.CandidateInfo>
        <style.CandidateInfo>Explicação: {candidate.applicationText}</style.CandidateInfo>
        <style.CandidateInfo>Profissão: {candidate.profession}</style.CandidateInfo>
        <style.DivButtons>
          <style.Button >não aprovar</style.Button>
          <style.Button >Aprovar</style.Button>
        </style.DivButtons>
      </style.DivCandidate>
    )
  });
  const numberCandidates = data && data.trip && candidates.length;
  //-/////////////////////-//////////////////////-/////////////////////////

  return(
  <style.ContainerTripDetails>
    <div className="divDetail">
      <button onClick={() => navigate("/admin/trip/list")}>voltar</button>
      <p>lista detalhada</p>
      { isLoading && <h1>"...Carregando!!!"</h1> }
      {!isLoading && data &&
      <style.DivContainer>
        <style.DivTrip>
          <style.TripInfo>Viagem: {data.trip.name}</style.TripInfo>
          <style.TripInfo>Planeta: {data.trip.planet}</style.TripInfo>
          <style.TripInfo>Descrição: {data.trip.description}</style.TripInfo>
          <style.TripInfo>Duração: {data.trip.durationInDays} dias</style.TripInfo>
          <style.TripInfo>Data: {data.trip.date}</style.TripInfo>
        </style.DivTrip>
        {numberCandidates ? 
          <style.DivContainer>
            <style.TitleDiv>Candidados</style.TitleDiv>
            {candidates}
          </style.DivContainer> 
            : 
          <style.TitleDiv>Nenhum Candidado Cadastrado</style.TitleDiv>
        }
      </style.DivContainer>}
      {!isLoading && !data && erroData} 
    </div>
  </style.ContainerTripDetails>
)};
 
// dataTrip.trip && console.log(dataTrip.trip.candidates)
  // let teste 
  // dataTrip.trip && (teste = dataTrip.trip.candidates)
  // console.log(teste)