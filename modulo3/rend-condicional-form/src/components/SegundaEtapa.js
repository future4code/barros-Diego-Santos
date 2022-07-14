import React from "react";
import { Titulo, Formulario, DivForms,Etiqueta,Inputs } from "../style";



export const SegundaEtapa = () => {

    return (
        <>
            <Titulo>Etapa 2:<br/>
                Informações do Ensino Superior.
            </Titulo>
            <Formulario>
                <DivForms>
                    <Etiqueta>Qual Curso ?</Etiqueta>
                    <Inputs type="text" required/>
                </DivForms>
                <DivForms>
                    <Etiqueta>Unidade de Ensino Frequentada:</Etiqueta>
                    <Inputs type="text" required/>
                </DivForms>
            </Formulario>
        </>
    )
}