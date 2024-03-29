import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styleCreatTripPage";

import axios from "axios";
import * as MyConst from "../../constants/constants";
import { useSubmitDataForm } from "../../hoks/useSubmitDataForm";
import { useProtectedPage } from "../../hoks/useProtectedPage";


export const CreateTripePage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const [header, setHeader ] = useState( {headers: {auth: localStorage.getItem("token")}});
  const [bodyData, onChange , clear] = useSubmitDataForm({
    "name": "",
    "planet": "",
    "date": "",
    "description": "",
    "durationInDays": ""
  })  
  
  // --------------------------------------------//
  const submitNewTrip = (event) => {
    event.preventDefault();
    // ---- essas duas variaveis abaixo mudam o formato da data //
    let date = new Date(bodyData.date )
    let dateMDY = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    axios
      .post(`${MyConst.url}trips/`,{...bodyData,date: dateMDY},header)
      .then( (response) => {
        alert(`A viagem para o planeta ${bodyData.planet} criada`)
      })
      .catch( (error) => {
        alert("erro ao tentar criar viagem")
    })
    clear()
  }
  ////////////////////////////////////////////////////////////////
  
  return (
  <style.ContainerCreatTripPage>
    <style.DivCentral>
      <style.Button className="btnToBack" onClick={() => navigate("/admin/trip/list")}>Voltar</style.Button>
      <style.TitleCreatTrip>Criar viagem</style.TitleCreatTrip>
      <style.FormCreatTrip onSubmit={submitNewTrip} >
        <style.DivInput>
          <style.TitleInput htmlFor="name">Nome da viagem</style.TitleInput>
          <style.InputCreatTrip
            required
            id="name"
            name="name"
            type="text"
            minLength="5"
            value={bodyData.name}
            onChange={onChange}
          />
        </style.DivInput>

        <style.DivSelect>
          <style.TitleInput htmlFor="planet">Planetas</style.TitleInput>
          <style.Select required name="planet" id="planet" value={bodyData.planet} onChange={onChange}>
            <style.Options value="">Escolha um Planeta</style.Options>
            {MyConst.listPlanet.map( (planet,index) => {
              return (
                <style.Options key={index} value={planet}>{planet}</style.Options>
              )
            })}
          </style.Select>
        </style.DivSelect>

        <style.DivInput>
          <style.TitleInput htmlFor="date">Data</style.TitleInput>
          <style.InputCreatTrip 
            required
            id="date"
            name="date"
            type="date"
            placeholder="ex:01/01/2000"
            min="2023/01/01" //nao funciona
            maxLength="10"       
            value={bodyData.date}
            onChange={onChange}
          />
        </style.DivInput>

        <style.DivInput>
          <style.TitleInput htmlFor="description">Descrição</style.TitleInput>
          <style.InputCreatTrip 
            required
            id="description"
            name="description"
            type="text"
            minLength="20"
            value={bodyData.description}
            onChange={onChange}
          />
        </style.DivInput>

        <style.DivInput>
          <style.TitleInput htmlFor="durationInDays">Duração da viagem</style.TitleInput>
          <style.InputCreatTrip 
            required
            id="durationInDays"
            name="durationInDays"
            type="number"
            min="50"
            value={bodyData.durationInDays}
            onChange={onChange}
          />
        </style.DivInput>
        <style.DivButton>
          <style.Button>Criar Viagem</style.Button>
        </style.DivButton>
      </style.FormCreatTrip>
    </style.DivCentral>  
  </style.ContainerCreatTripPage>
  )
}
