import styled from 'styled-components'
import backGround from '../../images/wallpaper2you_13412.jpg'

export const Button = styled.button `
    cursor: pointer;
`
export const Options = styled.option `
`
export const Select = styled.select `
    display: block;
`
export const DivSelect = styled.fieldset `
    border: none;
`
export const TitleInput = styled.label `
`
export const InputCreatTrip = styled.input `
    display: block;
`

export const DivInput = styled.fieldset `
    border: none;
`
export const FormCreatTrip = styled.form `
    
`
export const DivButton = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
`
export const TitleCreatTrip = styled.h1 `
    font-size: 44px;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 2px #ffaa00;
    line-height: 1.2;
`
export const DivCentral = styled.div `
    width: 700px;
    padding: 50px 100px;
    
    border-radius: 30px;
    box-shadow: 0px 4px 5px gray;
    ${FormCreatTrip} {
        fieldset {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
            label {
                font-family:  'Noto Serif HK', serif;
                font-size: 25px;
                text-align: center;
                color: #fff;
                font-weight: 600;
                text-shadow: 1px 1px 1px #000;
                border-radius: 10px;
                margin-bottom: 5px;
            }///////
            input,select {
                min-width: 320px;
                max-width: 400px;
                margin: 5px auto;
                padding: 5px;
                font-size: 20px;
                border: none;
                border-radius: 6px;
                text-align: center;
                :hover {
                    box-shadow: 1px 3px 4px #000;
                }
            }/////////
            option {
        
            }
        }////////
        ${Button} {
            margin: 0 auto;
            font-size: 20px;
            padding: 5px 20px;
            width: 310px;
            margin-top: 20px;
            background-color: #000;
            color: #fff;
            :hover {
                color: #ffaa00;
                box-shadow: 1px 2px 3px #000;
            }
        }
    }///////
    .btnToBack {
        font-size: 22px;
        padding: 10px 25px;
        border-radius: 5px;
        border: none;
        background-color: #000;
        color: #fff;
        :hover{
            box-shadow: 1px 2px 3px #fff;
        }
    }
    /// esse media query é da DivCentral
    @media (max-width: 600px) {
        max-width: 600px;
        padding: 0;
        box-shadow: none;
        border: none;
        h1 {
            margin: 10px 0;
        }
    }
`
export const ContainerCreatTripPage = styled.div `
    background-image: url(${backGround});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`