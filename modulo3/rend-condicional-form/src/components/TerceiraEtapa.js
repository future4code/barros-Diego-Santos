import React from "react";
import { Titulo, Formulario, DivForms,Etiqueta,Inputs, Selecionar, Opcoes, } from "../style";


export const TerceiraEtapa = () => {
    return (
        <>
            <Titulo>Etapa 3:<br/>
                Informações Gerais de Ensino:
            </Titulo>
            <Formulario>
                <DivForms>
                    <Etiqueta>Por que você não terminou o curso de Gradução ?</Etiqueta>
                    <Inputs/>
                </DivForms>
                <DivForms>
                    <Etiqueta>Você fez algum curso Complementar ?</Etiqueta>
                    <Selecionar>
                        <Opcoes value="0">Nenhum</Opcoes>
                        <Opcoes value="1">Curso técnico</Opcoes>
                        <Opcoes value="2">Cursos de inglês</Opcoes>
                        <Opcoes value="3">Não fiz curso complementar</Opcoes>
                    </Selecionar>
                </DivForms>
            </Formulario>
        </>
    )
}