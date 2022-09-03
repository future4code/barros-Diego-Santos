import React, { useEffect, useState } from "react";
import * as MyConst from "../../constants/constants"
import * as style from "../tripDetailComponents/styleTripDetails"
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hoks/useProtectedPage";
import { useRequestData } from "../../hoks/useRequestData";
import axios from "axios";
import { render } from "@testing-library/react";



export const TripDetailsPage = () => {
  useProtectedPage()
  const navigate = useNavigate();
  const [header, setHeader ] = useState( {headers: {auth: localStorage.getItem("token")}});
  const [tripId, setTripId ] = useState( localStorage.getItem("tripId"));
  const [data, isLoading, erroData] = useRequestData( `${MyConst.url}trip/${tripId}/`,header);
  
  
  const decideCandidate = (candidateId,decideValue,name) => {
    axios
    .put(`${MyConst.url}trips/${tripId}/candidates/${candidateId}/decide`,decideValue,header)
    .then( (response) => {
      alert(decideValue.approve === true ? `${name} foi aprovado para a viagem` : `${name} não foi aprovado para a viagem`)
    })
    .catch( (error) => {
      alert("ouve um erro na requisiçãom, tento novamente mais tarde")
    })
  };
  // -------------------------------- Map dos candidatos ----------------------------------//
  const candidates = data && data.trip && data.trip.candidates.map( (candidate) => {
    return(
      <style.DivInfo  className="divInfoCandidate" key={candidate.id}>
        <style.PersonInfo><style.Span>Nome:</style.Span> {candidate.name}</style.PersonInfo>
        <style.PersonInfo><style.Span>Idade:</style.Span> {candidate.age}</style.PersonInfo>
        <style.PersonInfo><style.Span>País:</style.Span> {candidate.country}</style.PersonInfo>
        <style.PersonInfo><style.Span>Explicação:</style.Span> {candidate.applicationText}</style.PersonInfo>
        <style.PersonInfo><style.Span>Profissão:</style.Span> {candidate.profession}</style.PersonInfo>
        <style.DivButtons>
          <style.Button onClick={ () => decideCandidate(candidate.id,{"approve": false},candidate.name)}>não aprovar</style.Button>
          <style.Button onClick={ () => decideCandidate(candidate.id,{"approve": true},candidate.name)}>Aprovar</style.Button>
        </style.DivButtons>
      </style.DivInfo>
    )
  });
  const numberCandidates = data && data.trip && data.trip.candidates.length;
  //-///// -- - - -- - ///////// - //////// ---- -- --/////////// - /////////////////////////- --//

  // ----------------------- Map das pessoas Aprovadas ------------------------------------------------//
  const personApproved = data && data.trip && data.trip.approved.map( (person) => {
    return(
      <style.DivInfo className="divInfoPersonApproved" key={person.id}>
        <style.PersonInfo> - {person.name}</style.PersonInfo>
      </style.DivInfo>
    )
  })
  const numberApproved = data && data.trip && data.trip.approved.length;
  // --------------/ ///------------------- ///---------------------------/ // /-------------///
  return(
  <style.ContainerTripDetails>
    <style.DivCentral className="divCentralDetail">
      <style.Button className="btnToBack" onClick={() => navigate("/admin/trip/list")}>voltar</style.Button>
      <style.TitleDiv>Viagem</style.TitleDiv>
      { isLoading && <style.TitleDiv>"...Carregando!!!"</style.TitleDiv> }
      {!isLoading && data &&
      <style.DivContainer >
        <style.DivTrip>
          <style.TripInfo> <style.Span>Viagem:</style.Span> {data.trip.name}</style.TripInfo>
          <style.TripInfo><style.Span>Planeta:</style.Span> {data.trip.planet}</style.TripInfo>
          <style.TripInfo><style.Span>Descrição:</style.Span> {data.trip.description}</style.TripInfo>
          <style.TripInfo><style.Span>Duração:</style.Span> {data.trip.durationInDays} dias</style.TripInfo>
          <style.TripInfo><style.Span>Data:</style.Span> {data.trip.date}</style.TripInfo>
        </style.DivTrip>
        <style.DivContainer className="containerPerson">
          {numberCandidates ? 
            <style.DivContainer className="divCandidates">
              <style.TitleDiv>Candidados</style.TitleDiv>
              {candidates}
            </style.DivContainer> 
              : 
            <style.TitleDiv>Nenhum Candidado Cadastrado</style.TitleDiv>
          }
          {numberApproved ? 
            <style.DivContainer className="divPerson">
              <style.TitleDiv>Pessoas que foram aprovadas</style.TitleDiv>
              {personApproved}
            </style.DivContainer>
            :
            <style.TitleDiv>Nenhuma pessoa aprovada</style.TitleDiv>  
          }
        </style.DivContainer>
      </style.DivContainer>
      }
      {!isLoading && !data && erroData} 
    </style.DivCentral>
  </style.ContainerTripDetails>
)};