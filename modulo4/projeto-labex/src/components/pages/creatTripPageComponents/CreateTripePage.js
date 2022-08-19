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

  const reverseString = (string) => {
    string.reverseString()
    console.log(string)
  }
  const submitNewTrip = (event) => {
    event.preventDefault();
    // axios
    //   .post(`${MyConst.url}trips/`,bodyData,header)
    //   .then( (response) => {
    //   console.log("viagem criada")
    //   })
    //   .catch( (error) => {
    //   console.log("erro ao tentar criar viagem",error.response.config)
    // })
    // clear()

    console.log(bodyData)
  }
  
  
  return (
    <style.ContainerCreatTripPage>
      <button onClick={() => navigate("/admin/trip/list")}>Voltar</button>
      <style.TitleCreatTrip>criar viagem</style.TitleCreatTrip>
      <style.FormCreatTrip onSubmit={submitNewTrip} >
        <style.DivInput>
          <style.TitleInput htmlFor="name">Nome da viagem</style.TitleInput>
          <style.InputCreatTrip
            required
            id="name"
            name="name"
            type="text"
            minLength="5"
            x-moz-errormessage="digite pelo menos letras"
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
            min="2023/01/01"   
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
        <style.BtnCreatTrip>Criar Viagem</style.BtnCreatTrip>
      </style.FormCreatTrip>
    </style.ContainerCreatTripPage>
  )
}


// isso abaixo era um teste 
// const takeDate = new Date();
//   const date = takeDate.toLocaleDateString()
//   const teste = (d) => {
//     return d.split("").reverse().join("");
//   }
//   console.log(teste(date))