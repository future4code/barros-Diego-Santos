import styled from 'styled-components'





// toda estilizição dessas variaveis estaram na Variavel Container 
export const AreaNome = styled.input ``
export const AreaTexto = styled.input ``
export const Botao = styled.button``
export const TagFormulario = styled.form ``
export const ContainerInputs = styled.div ``
export const MensagemFlutuante = styled.p ``

export const Container = styled.div `
    max-width: 960px;
    height: 100vh;
    margin: 0 auto;
    background-color: #e9e7dfd2;
    border-top: 5px solid #00000019;
    border-bottom: 0;
    box-shadow: 0px 0px 3px #30302190;
    box-sizing: border-box;
    
    
    position: relative;
    ${ContainerInputs} {
        display: flex;
        justify-content: space-around;
        position: absolute;
        bottom: 10px;
        width: 100%;
        box-sizing: border-box;


        
        // esse css aqui aplica uma configuraçao em ambos os inputs e o botao
        input,button {
            padding: 7px 6px;
            border-radius: 6px;
            border: 1px solid #00000202;
            box-shadow: 0 1px 3px #00000009;

            margin: 3px;
            font-size: 18px;
        }
        input:hover,button:hover {
            box-shadow: 0 0 2px #000000;
        }
         //ABAIXO - css do input de nome
        ${AreaNome}{
            max-width: 20%;
            background-color: #fff;
            font-weight: bold;
        }
         //ABAIXO - css do input de texto
        ${AreaTexto}{
            width: 55%;
            background-color: #fff;
        }
         //ABAIXO - css do botao
        ${Botao}{
            background-color: #c0c0c068;
            width: 15%;
            font-weight: 600;
    } ${Botao}:active{
            background-color: #c0c0c0;
            transition: 100ms;
    }
    }
`
/*
${ContainerInputs}{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    // css do input de nome
    ${AreaNome}{
        
    }
    //css do input de texto
    ${AreaTexto}{

    }
    //css do botao
    ${Botao}{

    }
}
*/