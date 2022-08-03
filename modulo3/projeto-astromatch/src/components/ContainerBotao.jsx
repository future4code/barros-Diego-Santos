import React from "react";
import { DivBotao, Botao } from "../style";


export const ContainerBotao = ({choosePerson}) => {
    return(
        <DivBotao>
            <Botao></Botao>
            <Botao onClick={() => choosePerson()}>Teste</Botao>
        </DivBotao>
    )
}