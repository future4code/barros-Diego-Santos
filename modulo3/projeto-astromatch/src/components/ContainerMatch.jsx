import React from "react";

import imgTriste from "./imagens/sad.webp"

import { MatchContainer, MatchPerfil ,MatchPhoto, MatchInfo, Header, ListaMatchVazia } from "../style";



export const ContainerMatch = ( { match, voltarTela} ) => {


    const listaMatch = match.map( (match) => {
            return(
                <MatchPerfil key={match.id}>
                    <MatchPhoto  src={match.photo} />
                    <MatchInfo>{match.name}</MatchInfo>
                    <MatchInfo>{match.age} anos</MatchInfo>
                </MatchPerfil>
            ) 
    });

    return(
        <MatchContainer>
            {match.length >= 1 ? 
                listaMatch 
                :
                <ListaMatchVazia imgTriste={imgTriste}>
                    <h1>Lista vazia 💔</h1>
                </ListaMatchVazia>
            }
        </MatchContainer>
    )
}