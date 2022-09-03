import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "../homePageComponents/styleHomePage"


export const HomePage = () => {
  const navigate = useNavigate()

  return(
    <style.ContainerHome>
      <style.HomePg>
        <style.DivTitle>
          <style.Title> Labex</style.Title>
          <style.Title> Viajando ao espaço  </style.Title>  
        </style.DivTitle>  
        <style.DivButton>
          <style.ButtonHome onClick={ () => navigate( "/trip/list" )}>Acesso livre</style.ButtonHome>
          <style.ButtonHome onClick={ () => navigate( "/login" )}>Login</style.ButtonHome>
        </style.DivButton>
      </style.HomePg>
    </style.ContainerHome>
  )
}