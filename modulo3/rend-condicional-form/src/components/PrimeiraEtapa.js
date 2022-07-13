import React, { useState } from "react";
import { Titulo,Formulario, DivForms, Etiqueta, Inputs} from "../style";
import { Selecionar,Opcoes } from "../style";




export const  PrimeiraEtapa = ({arrayDiOpcao}) => {
    // const [selecaoOpcoes, setSelecaoOpcoes] = useState(0)
    // const selectOpcao = () => {

    // } 
     const mostrarOpcoes = arrayDiOpcao.map( (ListaOp,index) => {
        return (
            <Opcoes value={index}>{ListaOp}</Opcoes>
        )
    } )

    return (
        <>
            <Titulo>Etapa 1:<br/>
                Preencha os dados necessarios para prosseguir:
            </Titulo>
            <Formulario>
                <DivForms>
                    <Etiqueta>Nome</Etiqueta>
                    <Inputs type="text"  required />
                </DivForms>
                <DivForms>
                    <Etiqueta>Idade</Etiqueta>
                    <Inputs type="number" required />
                </DivForms>
                <DivForms>
                    <Etiqueta>Email</Etiqueta>
                    <Inputs type="email" required />
                </DivForms>
                <DivForms>
                    <Etiqueta>Grau de Escolaridade</Etiqueta>
                    <Selecionar >
                        {/* <Opcoes defaultValue="0" >Escolha uma Opção</Opcoes>
                        <Opcoes value="1">Ensino Médio Incompleto</Opcoes>
                        <Opcoes value="2" >Ensino Médio Completo</Opcoes>
                        <Opcoes value="3">Ensino Superior Incompleto</Opcoes>
                        <Opcoes value="4">Ensino Superior Completo</Opcoes> */}
                        {/* {mostrarOpcoes} */}
                    </Selecionar>
                </DivForms> 
            </Formulario>
        </>
    )
}