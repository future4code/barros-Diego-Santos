import styled from 'styled-components'

// vou fazer a estilizacaos dos components de baixo para cima, por que assim posso chamar o css no component pai //
export const DivButtons = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`
export const Title = styled.h1 `
    text-align: center;
`
export const Span = styled.span `
    font-weight: bold;
    font-size: 18px;
`
export const ListInfo = styled.li `
`

export const DivListTrip = styled.div `
    padding: 10px 5px;
    box-sizing: border-box;
    width: 600px;
    border: 1px solid #000;
    list-style: none;
    line-height: 1.7;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
`
export const DivContainerTrips = styled.div `
    width: 960px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`
