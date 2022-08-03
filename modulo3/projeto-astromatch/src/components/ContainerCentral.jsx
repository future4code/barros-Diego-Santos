import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContainerCentral,Header, TelaCarregamento} from "../style";
import iconeMatch from "./imagens/seguindo.svg"

import { CardPessoa } from "./CardPessoa";
import { ContainerBotao } from "./ContainerBotao";
import { ContainerMatch } from "./ContainerMatch";


const Container = () => {

  // A variavel personProfile  e pegarImg pega as informacoes e manda para o componet CardPessoa para renderizar --/
  const [personProfile, setPersonProfile] = useState([]) 
  const [pegarImg, setPegarImg] = useState([])

  //A variavel match pega as informacoes das pessoas que deram match e manda para o component COntainerMatch para renderizar
  const [match, setMatch] = useState([])
  //---------------- -----//// -;///------------ ////////////////////

  // informacoes para o axios --------------------------------------------------------------------//
  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-riosS-barros";
  const [id, setId]  = useState([])
  const body = {
    "id": id,
    "choice": true
  }
  
  // ----- Abaixo é a funcao  que vai exibir a primeira vez o perfil  ---//
    // Essa variavel abaixo faz o useEffect chamar a função novamente
  const [atualizarCardPessoa, setAtualizarCartPessoa] = useState(0)
  const getProfileToChoose = () => {
    axios
      .get(url + "/person")
      .then( (response) => {
        setPersonProfile([ response.data.profile])
        const photoProfile = {photo: response.data.profile.photo,
          photo_alt: response.data.profile.photo_alt
        }
        setPegarImg(photoProfile)
        setId(response.data.profile.id)
        console.log(response)
      })
      .catch( (error) => {
        console.log("algo deu errado")
        console.log(error)
      } )
  }
  useEffect( () => getProfileToChoose(), [atualizarCardPessoa])
  // ------------ /------ / ----------- / --------------------------------- //// --////// 
  
  // função abaixo ira enviar as informações do perfil que for escolhido //
  const choosePerson = () => {    
    axios
      .post(url + "/choose-person",body)
      .then( (response) => {
        console.log(response)
      })
      .catch( (error) => {
        console.log("Algo deu errado no choosePerson")
        console.log(error)
      })

    setAtualizarCartPessoa(atualizarCardPessoa+1)
    console.log(atualizarCardPessoa)
  }

  // Essa variavel abaixo é oque vai decidir se a tela vai mudar entre a tela inicial ou a tela de matches
  const [altarerTela, setAlterarTela] =useState(0)

  // As função abaixo ira exibir a lista de perfis que deram match e ira pegar todos perfis que deram match  //// // //
  const getMathes = () => {
    const newMatches = [...match]
    axios
      .get(url + "/matches")
      .then( (response) => {
        console.log(response.data.matches)
        setMatch(response.data.matches)
      })
      .catch( (error) => {
        console.log("deu erro no Get Matches")
        console.log(error)
      })
    setMatch(newMatches)
    setAlterarTela(1)
  }
  const voltarTela = () => {
    setAlterarTela(0)
  } 

  const qauntidade = match.length
  // Aqui é uma renderizacao condicional, fiz dessa forma para não jogar tudo la no return, acho que assim fica mais legivel o codigo
  const telaInicial =
    <>
      <Header>
        <button onClick={getMathes}> <img src={iconeMatch}/> </button>
        <h2> <span>Astro</span><span>match</span> </h2>
      </Header>
      {personProfile.length > 0 ? 
      <CardPessoa
        personProfile={personProfile}
        pegarImg={pegarImg}
      />  
      : 
      <TelaCarregamento>
        <h1>Carregando</h1>
      </TelaCarregamento>
      }
      <p>{qauntidade}</p>
      <ContainerBotao
        choosePerson={choosePerson}
      />
    </>
  ;
  /// ------------------------------/// /---------------------////
  const telaDeMatch = 
    <>
      <ContainerMatch
        match={match}

        voltarTela={voltarTela}
      />
    </>
  ;
  ///---------/-////-//------------------------/---/---------------///

  return (
    <ContainerCentral>
      {altarerTela === 0 ? telaInicial : telaDeMatch}
    </ContainerCentral>
  )
}

export default Container