import React from "react";

import iconeVoltar from "./imagens/desfazer.svg"

import { MatchContainer, MatchPerfil ,MatchPhoto, MatchInfo, Botao, Header } from "../style";



export const ContainerMatch = ( { match, voltarTela} ) => {

    const renderMatchList = match.map( (match) => {
           return(
               <MatchPerfil key={match.id}>
                   <MatchPhoto  src={match.photo} />
                   <MatchInfo>{match.name}</MatchInfo>
                   <MatchInfo>{match.age} anos</MatchInfo>
               </MatchPerfil>
           ) 
    })

    

    return(
        <MatchContainer>
            <Header>
                <button onClick={ () => voltarTela()}> <img src={iconeVoltar}/> </button>
                <h2> <span>Astro</span><span>match</span> </h2>
            </Header>
            {renderMatchList}
        </MatchContainer>
    )
}