import styled from 'styled-components'
import background from "../../images/wallpaper2you_83846.jpg"


// vou fazer a estilizacaos dos components de baixo para cima, por que assim posso chamar o css no component pai //
export const Button = styled.button `
    cursor: pointer;
    padding: 5px 10px;
    font-size: 20px;
    border-radius: 5px;
    margin: 0 10px;
    :hover{
        box-shadow: 0px 2px 3px gray;
        border: 1px solid #000;
    }
`

export const DivButtons = styled.div `
    width: 100vw;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    
`
export const Title = styled.h1 `
    color: #fff;
    text-align: center;
    font-size: 50px;
`
export const Span = styled.span `
    font-weight: bold;
    font-size: 20px;
`
export const ListInfo = styled.li `
`

export const DivListTrip = styled.div `
    padding: 10px 5px;
    margin: 10px 0;
    box-sizing: border-box;
    width: 450px;
    box-shadow: 1px 2px 5px #000;
    list-style: none;
    line-height: 1.7;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #e0ebef;
    border-radius: 10px;
    :hover{
        box-shadow: 1px 3px 3px #ffaa00;
    }
`
export const DivCentral = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1400px;
    margin: 0 auto;
    padding: 10px;
    @media (max-width:600px) {
        padding: 0;
        width: 100%;
        ${DivListTrip}{
            width: 330px;
        }
    }
`
export const DivContainerTrips = styled.div `
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 600px){

        ${Title}{
        font-size: 30px;
        }
        ${DivButtons}{
            width: 100%;
            margin: 15px 0;
        }
        button{
            margin: 0 15px;
            font-size: 17px;
            padding: 5px 8px;
        }
    }
`
