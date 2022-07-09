import React, { useState } from 'react'
import { Container } from '../style'
import { ContainerInputs, TagFormulario, AreaNome, AreaTexto, Botao } from '../style'
import { MsgEsquerda, MsgDireita } from '../style'





export const CorpoPagina = () => {

    const [msg, setMsg] = useState ([
        { nome:'', mensagem: '' },
      ]
    )

    const [inputNome, setInputNome] = useState('')
    const [inputMensagem, setInputMensagem] = useState('')
    
    const EnviarMensagem = (e) => {
        e.preventDefault()

        const novasMsg = [...msg, {nome: inputNome, mensagem: inputMensagem}]
        setMsg(novasMsg)

        console.log(inputNome + ": " + inputMensagem)
        setInputMensagem('')
        setInputNome('')
    };

    const testando = msg.map( (conteudo,index) => {
        if(conteudo.nome == 'eu'){
            return (
                <div className='exibirMsgDir' key={index}>  
                    <p className='msgDireita'>{conteudo.mensagem} </p> 
                </div>
            )
        } else if(conteudo.nome === ''){
            return (
                <div className='vazio' key={index}/>
            )
        } else if(conteudo.nome !== 'eu') {
            return (
                <div className='exibirMsgEsq' key={index}>
                    <p className='msgEsquerda'>
                        <span className='brackRow'>{conteudo.nome}</span>
                        {conteudo.mensagem}</p>
                </div>
            )
        }
    })

    return (    
        <Container>
            {testando}
            <ContainerInputs>
                <TagFormulario>
                    <AreaNome  value={inputNome} onChange={ (e) => setInputNome(e.target.value) }/> 
                    <AreaTexto placeholder='Mensagem' value={inputMensagem} onChange={ (e) => setInputMensagem(e.target.value) }/>
                    <Botao onClick={EnviarMensagem}>Enviar</Botao>
                </TagFormulario>
            </ContainerInputs>
        </Container>
        
    )
}