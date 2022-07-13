import React, {useState} from 'react'
import { PostContainer, PostFooter, PostHeader, UserPhoto, PostPhoto } from '../../style'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'


import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeCompartilhar from '../../img/share_black_24dp.svg'


function Post(props){
  
  const [numeroCurtidas, setNumeroCurtidas] = useState (0)
  //const [curtido, setCurtido] = useState('')
  const [comentando, setComentando] = useState('')
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  

  // reeorganizei essa parte abaixo para uma forma que achei melhor, da forma que estava antes tava me confundindo muito
  // parte de curtidas -------------------------------
  const onClickCurtida = () => {
    setNumeroCurtidas(numeroCurtidas + 1)
  }
  let iconeCurtida
    if(numeroCurtidas === 0) {
      iconeCurtida = iconeCoracaoBranco  // essa foi a forma que consegui fazer
    } else if (numeroCurtidas >= 2){       // a parte de curtir e tirar o curtir
      iconeCurtida = iconeCoracaoBranco
      setNumeroCurtidas(numeroCurtidas-2)
    } else {
      iconeCurtida = iconeCoracaoPreto
    }

  // parte comentarios   -------------------------------
  const [inputText, setInputText] = useState("")
  const handleInputText = (e) => {
    setInputText(e.target.value);
  } 

  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />
    }
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
    console.log(props.nomeUsuario + " Digitou " + inputText) 
  }

  let componenteComentario
    if(comentando) {
      componenteComentario = <SecaoComentario 
        aoEnviar={aoEnviarComentario}  
        onChangeComentario={handleInputText} 
      />
    } 

  // ----------------------------------------------------------------
  return(
    <>
      <PostContainer>
        <PostHeader>
          <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <p>{props.nomeUsuario}</p>
        </PostHeader>
        <PostPhoto src={props.fotoPost} alt={'imagem do post'} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={onClickCurtida}
            valorContador={numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={onClickComentario}
            valorContador={numeroComentarios}
          />
          <IconeComContador
            icone={iconeCompartilhar}  
          />
        </PostFooter>
          {componenteComentario}
      </PostContainer>  
    </>
  )
}


export default Post