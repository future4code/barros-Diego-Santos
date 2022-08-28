import styled from 'styled-components'
import background from '../../images/wallpaper2you_13411.jpg'

export const Button = styled.button `
    cursor: pointer;
`
// ----------------------------------------//
export const Options = styled.option `
`
export const Select = styled.select `
    font-size: 22px;
    padding: 5px 0;
    margin: 5px 0;
    width: 320px;
    border-radius: 5px;
    cursor: pointer;
`
export const DivSelect = styled.fieldset `
    border: none;
    border-radius: 5px;
`
/////////////////////////////////////////////


/// --------------------------------------------///
export const TitleInput = styled.label `
    font-size: 28px;
    color: #fff;
    text-shadow: 1px 1px 2px #000;
`
export const InputAppli = styled.input `
    display: block;
    padding: 3px 4px;
    margin: 5px 0 10px;
    font-size: 22px;
    border-radius: 5px;
    width: 310px;
    
    :hover {
        box-shadow: 1px 2px 3px #000;
    }
`
export const Warning = styled.p `
    margin: 0 2px;
`

export const DivInput = styled.fieldset `
    border: none;
`
export const DivButton = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
`
export const FormAppli = styled.form ` 
    padding: 50px 20px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    box-shadow: 0 2px 3px #000;
    background-color: #444444;
    border-radius: 10px;
    ${Button} {
        background-color: #000;
        color: #fff;
        font-size: 22px;
        margin-top: 15px;
        min-width: 150px;
        padding: 5px 10px;
        border-radius: 10px;
        border: none;
        :hover {
            border: 2px solid #000;
            box-shadow: 0px 1px 2px #ffe40e;
        }
    }
`
/// -------- ---------- ----------------- --------//
export const TitleAppliForm = styled.h1 `
    color: #fff;
    margin: 50px 0 100px;
    text-align: center;
`
export const DivCentral = styled.div `
    position: relative;
    width: 500px;
    border-right: 3px solid #000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 3px 3px #000;
    background-color: #4444;
    .btnToBack {
        position: absolute;
        display: block;
        left: 5px;
        top: 20px;
        padding: 5px 12px;
        font-size: 22px;
        border-radius: 5px;
        border: none;
        :hover {
            box-shadow: 1px 2px 3px #000;
            border: 2px solid #000;
        }
    }//////
    @media (max-width: 600px) {
        max-width: 350px;
        min-width: 100%;
        h1 {
            margin: 10px 0 15px;
            font-size: 30px;
        }////
        .btnToBack {
            font-size: 17px;
        }////
        ${FormAppli}{
            padding: 20px;
            margin: 0;
            background-color: #4444;
            border: none;
            fieldset {
                margin: 0;
                padding: 0;
            }
            select {
                width: 240px;
                font-size: initial;
            }
            label {
                font-size: 17px;
            }
            input {
                width: 240px;
                font-size: 16px;
            }
        }////
    }
`
/// ------------- ------------- ---------------- -/////
export const ContainerAppliFormPage = styled.div `
    max-width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: start;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
`