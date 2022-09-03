import styled from 'styled-components'
import background from '../../images/wallpaper_0000310368.jpg'

export const Button = styled.button `
    cursor: pointer;
`
export const DivButton = styled.div `
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TitleInput = styled.label `
    font-size: 25px;
`
export const InputLogin = styled.input `
    display: block;
    font-size: 22px;
    padding: 5px 10px;
    margin: 5px 0;
    border: none;
    border-radius: 5px;
`
export const DivInput = styled.fieldset `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin: 0 auto;
    border: none;
`
export const FormLogin = styled.form `
    margin: 50px 0;
    ${Button}{
        width: 200px;
        padding: 5px 10px;
        font-size: 22px;
        font-weight: bold;
        background-color: #4444;
        color: #fff;
        :hover{
            box-shadow: 1px 2px 3px #9af1b5;
        }
    }
`

export const TitleLogin = styled.h1 `
    text-align: center;
`
export const DivCentralLogin = styled.div `
    width: 600px;
    height: 600px;
    padding: 20px 50px;
    border: 1px solid #000;
    margin: 0 auto;
    background-color: transparent;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    font-weight: 600;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    
    border-top: 2px solid #000;
    box-shadow: 1px 3px 3px #000;
    .btnToBack {
        width: 100px;
        font-size: 20px;
        padding: 10px 20px;
        border-radius: 10px;
        border: 1px solid #000;
        background-color: #000;
        color: #fff;
        :hover{
            box-shadow: 1px 2px 3px #ffaa00;
        }
    }////
    @media (max-width: 600px) {
        width: 100%;
        height: 100vh;
        border: none;
        box-shadow: none;
        padding: 0;
        h1{
            margin-top: 40px;
        }
    }
`
export const ContainerLoginPage = styled.div `
    flex: 1;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-image: url( ${background});
    @media (max-width: 600px) {
        background-size: contain;
    }
`