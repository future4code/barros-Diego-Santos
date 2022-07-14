import styled from 'styled-components'

export const Container = styled.div `
    width: 50vw;
    margin: 20px auto 0;
`

export const Titulo = styled.h1 `
    text-align: center;
    font-size: 1.5rem;
`

export const Formulario = styled.form `
    max-width: 350px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  
`

export const DivForms = styled.fieldset `
    display: flex;
    flex-direction: column;

    box-shadow: 1px 2px 3px #000;
    border: 0 ;
    margin: 5px 0;
`
export const Etiqueta = styled.label `
    margin: 5px 0;
    font-size: 19px;
`
export const Inputs = styled.input `
    font-size: 17px;
    padding: 5px;
    border-radius: 5px;
`
export const Selecionar = styled.select `
    font-size: 17px;
    padding: 5px;
`
export const Opcoes = styled.option ``


export const BtnConfirm = styled.button `
    width: 150px;
    padding: 10px 15px;
    margin: 20px auto 0;
    font-size: 16px;
`