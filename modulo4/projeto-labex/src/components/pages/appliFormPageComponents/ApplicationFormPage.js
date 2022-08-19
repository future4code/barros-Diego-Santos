import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as style from "./styleAppliFormPage";
import * as MyConst from "../../constants/constants";

import { useRequestData } from "../../hoks/useRequestData";
import { useSubmitDataForm } from "../../hoks/useSubmitDataForm"




export const ApplicationFormPage = () => {

  const navigate = useNavigate()
  const [tripName , tripNameIsLoading, errotripName] = useRequestData( `${MyConst.url}trips` )
  const [tripId, setTripId] = useState("")
  const [ formTrip, onChange, clear] = useSubmitDataForm( { 
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  })
  
  const submitFormTripAppli = (event) => {
    event.preventDefault()
    // axios
    //   .post(`${MyConst.url}trips/${tripId}/apply`,formTrip)
    //   .then( (Response) =>{
    //     console.log("deu certo")
    //   })
    //   .catch( (error) => {
    //     console.log("deu errado", error)
    // })
    // clear() 
    console.log(formTrip)
  }

  const namesTrips = tripName.trips && tripName.trips.map( name => {
    return (
      <style.Options key={name.id} value={name.id}> {name.name} </style.Options>)
  })

  const nameCountry = MyConst.listCountry.map( (name,index) => {
    return  <style.Options key={index} value={name}> {name}  </style.Options>
  })

  
  
  
  return (
    <style.ContainerAppliFormPage>
      <button onClick={ () => navigate("/trip/list")}>Voltar</button>
      <style.TitleAppliForm>Inscreva-se para uma viagem</style.TitleAppliForm>

      <style.FormAppli onSubmit={submitFormTripAppli}>
        <style.DivSelect>
          <style.Select  required onChange={ (e) => setTripId(e.target.value) }>
            <style.Options value="">Selecione uma viagem</style.Options>
            {namesTrips}
          </style.Select>
        </style.DivSelect>

        <style.DivInput>
          <style.TitleInput htmlFor="name">Nome</style.TitleInput>
          <style.InputAppli
            required
            id="name"
            name="name"
            minLength="3"
            type="text"
            value={formTrip.name}
            onChange={ onChange }
          />
        </style.DivInput>

        <style.DivInput>
          <style.TitleInput htmlFor="age">Idade</style.TitleInput>
          <style.InputAppli
            required
            id="age"
            name="age"
            type="number"
            min="18"
            oninvalid="setCustomValidity('Apenas números! ')"
            value={formTrip.age}
            onChange={ onChange }
          />
        </style.DivInput>

        <style.DivInput>
          <style.TitleInput htmlFor="applicationText">Razão da viagem</style.TitleInput>
          <style.InputAppli
            required
            id="applicationText"
            name="applicationText"
            type="text"
            minLength="15" //vou colocar só 15, so pra ficar mais simples
            value={formTrip.applicationText}
            onChange={ onChange }
          />
        </style.DivInput>

        <style.DivInput>
          <style.TitleInput htmlFor="profession">Profissão</style.TitleInput>
          <style.InputAppli
            required
            id="profession"
            name="profession"
            type="text"
            value={formTrip.profession}
            onChange={ onChange }
          />
        </style.DivInput>

        <style.DivSelect>
          <style.Select required name="country" id="country" onChange={onChange}>
            <style.Options value="">Selecione um País</style.Options>
            {nameCountry}
          </style.Select>
        </style.DivSelect>
        <style.BtnAppliForm  type="submit">Enviar</style.BtnAppliForm> 
      </style.FormAppli>
      
    </style.ContainerAppliFormPage>
  )
}