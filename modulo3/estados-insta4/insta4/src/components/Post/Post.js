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
      console.log('tirou o Curtiu!')
    } else {
      iconeCurtida = iconeCoracaoPreto
      console.log('Curtiu!')
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
    console.log(inputText)
  }

  let componenteComentario
    if(comentando) {
      componenteComentario = <SecaoComentario 
        aoEnviar={aoEnviarComentario}  
        onChangeComentario={handleInputText} 
      />
    } 
  
  
  const Arraypost = [ // essa linha comentada abaixo foi a primeira forma que fiz, ai depois fiz usando o props para ver se funcionaria e funcionou :)
    // { nomeUsuario: 'paulinha',
    //   fotoUsuario: 'https://picsum.photos/50/50',
    //   fotoPost: 'https://picsum.photos/200/200' 
    // },

    // {
    // nomeUsuario: 'Francisco',
    // fotoUsuario: 'https://picsum.photos/50/51',
    // fotoPost: 'https://picsum.photos/200/180'
    // },
      
    // {      
    //   nomeUsuario: 'Joseph',
    //   fotoUsuario: 'https://picsum.photos/50/48',
    //   fotoPost: 'https://picsum.photos/200/170'
    // },      
          
    // {
    //   nomeUsuario: 'Fernanda',
    //   fotoUsuario: 'https://picsum.photos/50/49',
    //   fotoPost: 'https://picsum.photos/200/190'
    // },
    {
      nomeUsuario: props.nomeUsuario,
      fotoUsuario: props.fotoUsuario,
      fotoPost: props.fotoPost
    }
  ] 

    const AreaPost = Arraypost.map( (conteudo, index) => {
      return (
        <PostContainer key={index}>
          <PostHeader>
            <UserPhoto src={conteudo.fotoUsuario} alt={'Imagem do usuario'} key={'FotoUsuar'}/>
            <p key={'NomeUsuar'}>{conteudo.nomeUsuario}</p>
          </PostHeader>
          <PostPhoto src={conteudo.fotoPost} alt={'imagem do post'} key={'ImgPost'}/>

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
      )
    })
    console.log(Arraypost) // no enuciado fala que tem que por um console.log nos post mas nao entendi bem oque quiseram dizer


  // ----------------------------------------------------------------
  return(
    <>
      {AreaPost}
    </>
    // <div className = 'PostContainer'>
    //   <div className = 'PostHeader'>
    //     <img className = 'UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'}/>
    //     <p>{props.nomeUsuario}</p>
    //   </div>

    //   <img className = 'PostPhoto'src={props.fotoPost} alt={'Imagem do post'}/>

    //   * <div className = 'PostFooter'>
    //     <IconeComContador
    //       icone={iconeCurtida}
    //       onClickIcone={onClickCurtida}
    //       valorContador={numeroCurtidas}
    //     />

    //     <IconeComContador
    //       icone={iconeComentario}
    //       onClickIcone={onClickComentario}
    //       valorContador={numeroComentarios}
    //     />
    //     <IconeComContador
    //       icone={iconeCompartilhar}  
    //     />
    //   </div>
    //   {componenteComentario}*
    // </div>
  )
}


export default Post