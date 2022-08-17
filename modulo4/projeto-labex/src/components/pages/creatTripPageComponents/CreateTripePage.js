import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { ContainerCreatTripPage, FormCreatTrip, TitleCreatTrip,
  DivInput, TitleInput, InputCreatTrip, BtnCreatTrip,
  DivSelect,Select,Options } from "./styleCreatTripPage";
import axios from "axios";

import { useSubmitDataForm } from "../../hoks/useSubmitDataForm";
import { url,listPlanet } from "../../constants";

export const CreateTripePage = () => {
  const navigate = useNavigate()
  const [bodyData, onChange , clear] = useSubmitDataForm({
    "name": "",
    "planet": "",
    "date": "",
    "description": "",
    "durationInDays": ""
  })  

  const header = {
    headers: {
      auth : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImxCS3hxVzJGWTdnZ253NFJsZjN4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2NjAxODIxOTd9.I9ugSbdIHp2RCTlxF_KvJmImcFFzDmWo6JcjEJSRexw"
    }
  }

  const submitNewTrip = (event) => {
    event.preventDefault();
    axios
      .post(`${url}trips/`,bodyData,header)
      .then( (response) => {
      console.log("viagem criada")
      })
      .catch( (error) => {
      console.log("erro ao tentar criar viagem",error.response.config)
    })
    clear()
  }

  
  return (
    <ContainerCreatTripPage>
      <button onClick={() => navigate(-1)}>Voltar</button>
      <TitleCreatTrip>criar viagem</TitleCreatTrip>
      <FormCreatTrip onSubmit={submitNewTrip} >
        <DivInput>
          <TitleInput htmlFor="name">Nome da viagem</TitleInput>
          <InputCreatTrip
            required
            id="name"
            name="name"
            type="text"
            minLength="5"
            value={bodyData.name}
            onChange={onChange}
          />
        </DivInput>

        <DivSelect>
          <TitleInput htmlFor="planet">Planetas</TitleInput>
          <Select required name="planet" id="planet" value={bodyData.planet} onChange={onChange}>
            <Options value="">Escolha um Planeta</Options>
            {listPlanet.map( (planet,index) => {
              return (
                <Options key={index} value={planet}>{planet}</Options>
              )
            })}
          </Select>
        </DivSelect>

        <DivInput>
          <TitleInput htmlFor="date">Data</TitleInput>
          <InputCreatTrip 
            required
            id="date"
            name="date"
            type="date"
            min="2023-01-01"
            //  min={() => { date.toLocaleDateString()}} // vou deixar pra fazer isso depois
            value={bodyData.date}
            onChange={onChange}
          />
        </DivInput>

        <DivInput>
          <TitleInput htmlFor="description">Descrição</TitleInput>
          <InputCreatTrip 
            required
            id="description"
            name="description"
            type="text"
            minLength="20"
            value={bodyData.description}
            onChange={onChange}
          />
        </DivInput>

        <DivInput>
          <TitleInput htmlFor="durationInDays">Duração da viagem</TitleInput>
          <InputCreatTrip 
            required
            id="durationInDays"
            name="durationInDays"
            type="number"
            min="50"
            value={bodyData.durationInDays}
            onChange={onChange}
          />
        </DivInput>
        <BtnCreatTrip>Criar Viagem</BtnCreatTrip>
      </FormCreatTrip>
    </ContainerCreatTripPage>
  )
}


// isso abaixo era um teste 
// const takeDate = new Date();
//   const date = takeDate.toLocaleDateString()
//   const teste = (d) => {
//     return d.split("").reverse().join("");
//   }
//   console.log(teste(date))