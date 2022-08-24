import styled from 'styled-components'

// vou fazer a estilizacaos dos components de baixo para cima, por que assim posso chamar o css no component pai //

//  tudo abaixo é filho do component DivRenderTrip ...
export const BtnAdmin = styled.button `
`
export const DivBtnDel = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    border-radius: 20%;
    height: 100%;
    :hover{
        box-shadow: 2px 3px 3px #000;
    }
`

export const ListInfo = styled.h2 `
`

export const DivTrip = styled.div `
    flex: 1;
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 0 15px;
`

export const DivRenderTrip = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px;
    width: 600px;
    margin: 0 auto;
`
// ----------------------------------------------------//

export const DivButtons = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`
export const Title = styled.h1 `
    text-align: center;
`
export const ContainerAdmHome = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`