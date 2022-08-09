import React, { useEffect, useState } from "react";
import axios from "axios";
import { BtnDelet, ContainerCentral,Header, TelaCarregamento} from "../style";
import iconeMatch from "./imagens/seguindo.svg"
import iconeVoltar from "./imagens/desfazer.svg"

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
      })
      .catch( (error) => {
        console.log("algo deu errado no getProfileToChoose")
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
        getMatches()
      })
      .catch( (error) => {
        console.log("Algo deu errado no choosePerson")
        console.log(error)
      })

    setAtualizarCartPessoa(atualizarCardPessoa+1)
  }

  const jumpPerson = () => {
    setAtualizarCartPessoa(atualizarCardPessoa+1)
  }

  // Essa variavel abaixo é oque vai decidir se a tela vai mudar entre a tela inicial ou a tela de matches
  const [altarerTela, setAlterarTela] =useState(0)
  // Esse useEffect pega os perfis que deram matches //
  const getMatches = () => {
    const newMatches = [...match]
    axios
      .get(url + "/matches")
      .then( (response) => {
        setMatch(response.data.matches)
      })
      .catch( (error) => {
        console.log("deu erro no Get Matches")
        console.log(error)
      })
    setMatch(newMatches)
  }
  useEffect( () => getMatches(),[atualizarCardPessoa])
  // As função abaixo ira exibir a lista de perfis que deram match e ira pegar todos perfis que deram match  //// // //
  const renderMathes = () => {
    getMatches()
    setAlterarTela(1)
  }
  const voltarTela = () => {
    setAlterarTela(0)
  } 

  // ----------------------------------------------------------///

  // Abaixo a função que ira zerar a lista de matches ---------------/
  const putClear = () => {
    axios
      .put(url +"/clear" )
      .then( (response) => {
        alert("lista de matches foi zerada")
        setMatch([])
        getProfileToChoose()
        setAtualizarCartPessoa(atualizarCardPessoa-1)
      })
      .catch( (error) => {
        console.log("algo deu errado na funcao de limpar matches")
        console.log(error)
      })
  }
  if(match.length >=12 ){
    alert("Zerando lista de matches automaticamente para não quebrar a aplicação")
    putClear()
    
  }
  //----------------------------------------------------------------///
  // Aqui é uma renderizacao condicional, fiz dessa forma para não jogar tudo la no return, acho que assim fica mais legivel o codigo
  const telaInicial =
    <>
      <Header>
        <h2> <span>Astro</span><span>match</span> </h2>
        <span className="quantidadeMatches">{match.length } </span>
        <button className="btnHeader" onClick={renderMathes}> <img src={iconeMatch}/>  </button>
      </Header>
      {personProfile.length > 0 ? 
      <CardPessoa 
        personProfile={personProfile}
        pegarImg={pegarImg}
      />  
      : 
      <TelaCarregamento>
        <div><h1>Carregando</h1></div>
      </TelaCarregamento>
      }
      {/* <p>{qauntidade}</p> */}
      <ContainerBotao
        choosePerson={choosePerson}

        jumpPerson={jumpPerson}
      />
    </>
  ;
  /// ------------------------------/// /---------------------////
  const telaDeMatch = 
    <>
      <Header>
        <button onClick={ () => voltarTela()}> <img src={iconeVoltar}/> </button>
        <h2> <span>Astro</span><span>match</span> </h2>
      </Header>
      <ContainerMatch
        match={match}

        voltarTela={voltarTela}

        putClear={putClear}
      />
    </>
  ;
  ///---------/-////-//------------------------/---/---------------///

  return (
    <ContainerCentral>
      {altarerTela === 0 ? telaInicial : telaDeMatch}
      <BtnDelet onClick={putClear}>Resetar lista de matches</BtnDelet>
    </ContainerCentral>
  )
}

export default Container