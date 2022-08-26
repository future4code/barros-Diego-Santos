import styled from 'styled-components'
import skyStelar from "../../images/wallpaper2you_13414.jpg"

// vou fazer a estilizacaos dos components de baixo para cima, por que assim posso chamar o css no component pai //

//  tudo abaixo é filho do component DivRenderTrip ...
export const BtnAdmin = styled.button `
    cursor: pointer;
`
export const DivBtnDel = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    margin-left: 10px;
    border-radius: 20px;
    ${BtnAdmin} {
        border: none;
        background-color: transparent;
        svg {
            color:  #e34042;
            width: 40px;
            height: 50px;
        }
    }
    :hover{
        box-shadow: 2px 3px 3px #000;
        border: 1px solid;
    }
`

export const ListInfo = styled.h2 `
    color: #fff;
`

export const DivTrip = styled.div `
    width: 40vw;
    font-family: Arial, Helvetica, sans-serif;
    
    border-radius: 10px;
    padding: 0 15px;
    cursor: pointer;
    background-color: #061e38;
    min-height: 80px;
    :hover {
        box-shadow: 1px 1px 2px #fff;
        border:2px solid ;
    }
    @media (max-width: 600px) {
        width: 70vw;
        ${ListInfo}{
            font-size: 20px;
        }
    }
`

export const DivRenderTrip = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px;
    max-width: 600px;
    margin: 10px auto;
    min-height: 80px;
    @media (max-width: 600px){
        justify-content: space-around;
        padding: 0;
    }
`
// ----------------------------------------------------//

export const DivButtons = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`
export const Title = styled.h1 `
    text-align: center;
    color: #fff;
    text-shadow: 1px 2px 3px #000;
`

export const ContainerAdmHome = styled.div `
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url( ${skyStelar} );
    background-repeat: no-repeat;
    background-size: cover;
    .DivbuttonTop {
        min-width: 300px;
        min-height: 50px;
        margin-top: 10px;
        ${BtnAdmin} {
            padding: 5px 10px;
            background-color: #000;
            color: #fff;
            border: 1px solid gray;
            font-size: 20px;
            border-radius: 10px;
        }
        ${BtnAdmin}:nth-child(1){
            :hover{
                color: #e34042;
                box-shadow: 0 1px 2px #fff;
                border: 2px solid #000;
            }
        }
        ${BtnAdmin}:nth-child(2){
            :hover{
                color: #cdfad0;
                box-shadow: -1px 1px 2px #fff;
                border: 2px solid #000;
            }
        }
    }
`