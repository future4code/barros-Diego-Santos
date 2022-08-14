import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BtnAppliForm, ContainerAppliFormPage, FormAppli, InputAppli, TitleAppliForm } from "./styleAppliFormPage";

import { country,url } from "../../constants";
import { useRequestData } from "../../hoks/useRequestData";
import { useSubmitData } from "../../hoks/useSubmitData";




export const ApplicationFormPage = () => {

  const navigate = useNavigate()
  const [tripName , tripNameIsLoading, errotripName] = useRequestData( `${url}trips` )

  const [ inputName, setInputName] = useState("")
  const [ inputAge, setInputAge] = useState("")
  const [ inputText, setInputText] = useState("")
  const [ inputProfection, setInputProfection] = useState("")
  const [ selectCountry, setSelectCountry] = useState("")
  const [ selectTripId, setSelectTripId] = useState({})

  const bodyAppliForm = {
    "name": inputName,
    "age": inputAge,
    "applicationText": inputText,
    "profession": inputProfection,
    "country": selectCountry
  };
 
  // const [dataSubmitted , dataSubmittedError] = useSubmitData(`${url}trips/${selectTripId}/${bodyAppliForm}`)
  const SubmitForm = () => {
    //  useSubmitData(`${url}trips/${selectTripId}/${bodyAppliForm}`)
     const [dataSubmitted , dataSubmittedError] = useSubmitData(`${url}trips/${selectTripId}/${bodyAppliForm}`)
    // console.log(dataSubmitted)
    // console.log(dataSubmittedError)
  }
  

  const namesTrips = tripName.trips && tripName.trips.map( name => {
    return <option key={name.id} value={name.id}> {name.name} </option>
  })

  const nameCountry = country.map( (name,index) => {
    return  <option key={index} value={name}> {name}  </option>
  })

  
  
  
  return (
    <ContainerAppliFormPage>
      <button onClick={ () => navigate("/trip/list")}>Voltar</button>
      <TitleAppliForm>Inscreva-se para uma viagem</TitleAppliForm>

      <FormAppli onSubmit={(e) => { e.preventDefault(); SubmitForm()}}>
        <select onChange={ e => setSelectTripId(e.target.value)}>
          <option>Selecione uma viagem</option>
          {namesTrips}
        </select>
        <InputAppli
          required
          placeholder="Nome:"
          type="text"
          value={inputName}
          onChange={ e => setInputName(e.target.value) }
        />
        <InputAppli
          required
          placeholder="Idade:"
          type="number"
          value={inputAge}
          onChange={ e => setInputAge(e.target.value) }
        />
        <InputAppli
          required
          placeholder="Razão da viagem"
          type="text"
          value={inputText}
          onChange={ e => setInputText(e.target.value) }
        />
        <InputAppli
          required
          placeholder="Profissão"
          type="text"
          value={inputProfection}
          onChange={ e => setInputProfection(e.target.value) }
        />
        <select onChange={ event => setSelectCountry(event.target.value)}>
          <option>Selecione um País</option>
          {nameCountry}
        </select>
        <BtnAppliForm  type="submit">Enviar</BtnAppliForm> 
      </FormAppli>
      
    </ContainerAppliFormPage>
  )
}