import React, { useState } from 'react'
import { Container } from '../style'
import { ContainerInputs, TagFormulario, AreaNome, AreaTexto, Botao } from '../style'




export const CorpoPagina = () => {
    const [inputNome, setInputNome] = useState('')
    const handleInputNome = (e) => {
        setInputNome(e.target.value);
    };

    const [inputMensagem, setInputMensagem] = useState('')
    const handleInputMensagem = (e) => {
        setInputMensagem(e.target.value);
    };
    
    const EnviarMensagem = (e) => {
        let batata = inputNome + ": " + inputMensagem
        return batata
        console.log(inputNome + ": " + inputMensagem)
    };

    return (    
        <Container>
            <EnviarMensagem/>
            <ContainerInputs>
                <TagFormulario>
                    <AreaNome  value={inputNome} onChange={handleInputNome}/> 
                    <AreaTexto placeholder='Mensagem' value={inputMensagem} onChange={handleInputMensagem}/>
                </TagFormulario>
                <Botao onClick={EnviarMensagem}>Enviar</Botao>
            </ContainerInputs>
        </Container>
        
    )
}