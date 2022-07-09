import styled from 'styled-components'


// toda estilizição dessas variaveis estaram na Variavel Container 
export const AreaNome = styled.input ``
export const AreaTexto = styled.input ``
export const Botao = styled.button``
export const TagFormulario = styled.form ``
export const ContainerInputs = styled.div ``

export const Container = styled.div `
    max-width: 960px;
    height: 100vh;
    margin: 0 auto;
    background-color: #ECE5DD;
    border-top: 5px solid #00000019;
    border-bottom: 0;
    box-shadow: 0px 0px 3px #30302190;
    box-sizing: border-box;
    
    
    overflow: auto;
    position: relative;
    // abiaxo css das mensagens do lado direito
    .exibirMsgDir {
        display: flex;
        flex-direction: row-reverse;
    
        width: 100%;
        line-height: 0;

        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .exibirMsgDir .msgDireita {
        background-color: #DCF8C6;
        padding: 25px 30px;
        margin: 2px 10px;
        border-radius: 5px;
    }
    // abiaxo css das mensagens do lado esquerdo
    .exibirMsgEsq {
        display: flex;
        
    }
    .exibirMsgEsq .msgEsquerda {
        
        padding: 10px 25px;
        margin: 2px 10px;
        border-radius: 5px;

        background-color: #f1f1f1;
        line-height: 1.5;
        .brackRow {
            display: block;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
    ${ContainerInputs} {
        max-width: 960px;
        position: absolute;
        bottom: 15px;
        box-sizing: border-box;
        width: 100%;
        left: 0;
        
        ${TagFormulario} {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
        }
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
            width: 20%;
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
