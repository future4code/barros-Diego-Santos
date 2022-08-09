import React from "react";
import { DivBotao, Botao } from "../style";


export const ContainerBotao = ({choosePerson,jumpPerson}) => {
    return(
        <DivBotao>
            <Botao onClick={() => jumpPerson()}>X</Botao>
            <Botao onClick={() => choosePerson()}><span>❤️</span> </Botao>
        </DivBotao>
    )
}