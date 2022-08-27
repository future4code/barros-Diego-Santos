import styled from "styled-components"
import background from "../../images/wallpaper2you_13426.jpg"

export const Title = styled.h1 `
    font-size: 55px;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    margin: 5px 0;
`
export const DivTitle = styled.div `
`

export const ButtonHome = styled.button `
    padding: 8px 12px;
    font-size: 25px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    :hover{
        box-shadow: 1px 2px 3px #000;
    }
`
export const DivButton = styled.div `
    padding: 5px;
    margin: 20px auto 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 300px;
`

export const HomePg = styled.div `
    width: 700px;
    height: 500px;
    border: none;
    box-shadow: 1px 4px 5px #000;
    border-radius: 10px;
   
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: 600px){
        padding: 0;
        margin: 0;
        width: 100%;
        box-shadow: none;
        h1{
            font-size: 38px;
        }
        button{
            font-size: 20px;
            padding: 6px 10px;
        }
    }
`
export const ContainerHome = styled.div `
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${background});

    @media (max-width: 600px){
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 10%;
    }   
`