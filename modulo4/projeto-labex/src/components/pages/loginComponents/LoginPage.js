import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "../../pages/loginComponents/styleLoginPage"
import * as MyConst from "../../constants/constants"
import axios from "axios";
import { useSubmitDataForm } from "../../hoks/useSubmitDataForm";

export const LoginPage = () => {
  const navigate = useNavigate()
  const [dataLogin, onChange, clear ] = useSubmitDataForm( { email: "", password: ""})
  
  //////---------------------------//////////
  const login = (event) => {
    event.preventDefault()
    axios
      .post(`${MyConst.url}login`,dataLogin)
      .then( (response) => {
        localStorage.setItem("token",response.data.token)
        navigate("/admin/trip/list")
      })
      .catch( (error) => {
        alert("email ou senha invalido, tente novamente")
      })
  }
  ///----------// ------- ///// ---------/////
  return(
  <style.ContainerLoginPage>
    <style.DivCentralLogin>
      <style.Button className="btnToBack" onClick={ () => navigate("/")}>voltar</style.Button>
      <style.TitleLogin>Bem-vindo!</style.TitleLogin>
      <style.FormLogin onSubmit={ login }>
        <style.DivInput>
          <style.TitleInput htmlFor="email">Email:</style.TitleInput>
          <style.InputLogin
            required
            id="email"
            name="email"
            type="email"
            value={dataLogin.email}
            onChange={ onChange }
            pattern="[a-z0-9A-Z._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </style.DivInput>

        <style.DivInput>
          <style.TitleInput htmlFor="password">Senha:</style.TitleInput>
          <style.InputLogin
            required
            id="password"
            name="password"
            type="password"
            value={dataLogin.password}
            onChange={ onChange }
          />
        </style.DivInput>
      <style.DivButton>
        <style.Button>Login</style.Button>
      </style.DivButton>
      </style.FormLogin>
    </style.DivCentralLogin>
  </style.ContainerLoginPage>
)}