import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
// Abaixo o css da pagina home //
const Title = styled.h1 `
    font-size: 45px;
    text-align: center;
`
const ButtonHome = styled.button `
    padding: 5px;
    font-size: 20px;
`
const DivButton = styled.div `
    padding: 5px;
    margin: 20px auto 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 300px;
`

const HomePg = styled.div `
    width: 60vw;
    height: 300px;
    border: 1px solid #000;
    border-radius: 10px;
    margin: 0 auto;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ContainerHome = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
// -------------------------------------------------------------- ///



export const HomePage = () => {

  const navigate = useNavigate()

  return(
    <ContainerHome>
      <HomePg>
        <Title> Bem vindo ao Labex - Viajando no espaço </Title>
          <DivButton>
            <ButtonHome onClick={ () => navigate( "/trip/list" )}>Acesso livre</ButtonHome>
            <ButtonHome onClick={ () => navigate( "/login" )}>Login</ButtonHome>
          </DivButton>
      </HomePg>
    </ContainerHome>
  )
}