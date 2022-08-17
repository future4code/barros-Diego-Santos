import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BtnAppliForm, ContainerAppliFormPage,
    DivInput, FormAppli, InputAppli, TitleAppliForm, TitleInput,
    DivSelect, Select, Options } from "./styleAppliFormPage";

import { listCountry,url } from "../../constants";
import { useRequestData } from "../../hoks/useRequestData";
import { useSubmitDataForm } from "../../hoks/useSubmitDataForm";
import axios from "axios";




export const ApplicationFormPage = () => {

  const navigate = useNavigate()
  const [tripName , tripNameIsLoading, errotripName] = useRequestData( `${url}trips` )
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
    //   .post(`${url}trips/${tripId}/apply`,formTrip)
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
      <Options
        key={name.id} 
        value={name.id}
      > 
        {name.name} 
      </Options>)
  })

  const nameCountry = listCountry.map( (name,index) => {
    return  <Options key={index} value={name}> {name}  </Options>
  })

  
  
  
  return (
    <ContainerAppliFormPage>
      <button onClick={ () => navigate("/trip/list")}>Voltar</button>
      <TitleAppliForm>Inscreva-se para uma viagem</TitleAppliForm>

      <FormAppli onSubmit={submitFormTripAppli}>
        <DivSelect>
          <Select  required onChange={ (e) => setTripId(e.target.value) }>
            <Options value="">Selecione uma viagem</Options>
            {namesTrips}
          </Select>
        </DivSelect>

        <DivInput>
          <TitleInput htmlFor="name">Nome</TitleInput>
          <InputAppli
            required
            id="name"
            name="name"
            minLength="3"
            type="text"
            value={formTrip.name}
            onChange={ onChange }
          />
        </DivInput>

        <DivInput>
          <TitleInput htmlFor="age">Idade</TitleInput>
          <InputAppli
            required
            id="age"
            name="age"
            type="number"
            min="18"
            oninvalid="setCustomValidity('Apenas números! ')"
            value={formTrip.age}
            onChange={ onChange }
          />
        </DivInput>

        <DivInput>
          <TitleInput htmlFor="applicationText">Razão da viagem</TitleInput>
          <InputAppli
            required
            id="applicationText"
            name="applicationText"
            type="text"
            minLength="15" //vou colocar só 15, so pra ficar mais simples
            value={formTrip.applicationText}
            onChange={ onChange }
          />
        </DivInput>

        <DivInput>
          <TitleInput htmlFor="profession">Profissão</TitleInput>
          <InputAppli
            required
            id="profession"
            name="profession"
            type="text"
            value={formTrip.profession}
            onChange={ onChange }
          />
        </DivInput>

        <DivSelect>
          <Select required name="country" id="country" onChange={onChange}>
            <Options value="">Selecione um País</Options>
            {nameCountry}
          </Select>
        </DivSelect>
        <BtnAppliForm  type="submit">Enviar</BtnAppliForm> 
      </FormAppli>
      
    </ContainerAppliFormPage>
  )
}