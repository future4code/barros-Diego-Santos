import React, { useState } from 'react';
import Post from './components/Post/Post';

import { MainContainer } from './style.js'


function App() {
  // const [ arrayPost, setArrayPost ] = useState([
  //   {
  //     nomeUsuario: props.nomeUsuario,
  //     fotoUsuario: props.fotoUsuario,
  //     fotoPost: props.fotoPost,
  //   },   
  //  ])
  const [arrayPost, setArrayPost] = useState([
    {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/200'
    },
    {
      nomeUsuario: 'Rafael',
      fotoUsuario: 'https://picsum.photos/50/47',
      fotoPost: 'https://picsum.photos/200/192'
    }
  ])
/// ------ inputs abaixo ---------------
  const [inputName, setInputName] = useState('')

  const [inputImgUser, setInputImgUser] = useState('')

  const [inputImgPost, setInputImgPost] = useState('')
//--------------- // -------------------------

  const btnAddPost = (e) => {
    e.preventDefault()
    const newArrPost = [...arrayPost,
      {
        nomeUsuario: inputName,
        fotoUsuario: inputImgUser,
        fotoPost: inputImgPost
      },
    ]
    setArrayPost(newArrPost)

    setInputName('')
    setInputImgUser('')
    setInputImgPost('')

    console.log('Um Novo Post foi Criado Por : ' + inputName)
  }




  const renderPost = arrayPost.map( (conteudo, index) => {
    return (
      <Post key={index}
        nomeUsuario={conteudo.nomeUsuario} 
        fotoUsuario={conteudo.fotoUsuario}
        fotoPost={conteudo.fotoPost}
      />
    )
  })

  //console.log(arrayPost)
return(

  <MainContainer>
    <form className='FormAddPost' action=''> {/* coloquei required, mas nao funcionou, pesquisei varias formas diferentes para tentar funcionar mas nao deu */}
      <input className='inputName' type='text' required placeholder="Seu nome"  value={inputName} onChange={ (e) => setInputName(e.target.value)} />

      <input className='inputImgUsuario' type='text' required  placeholder="Link de uma Foto" value={inputImgUser} onChange={ (e) => setInputImgUser(e.target.value)} />

      <input className='inputPost' type='text' required  placeholder="Link de uma Foto"  value={inputImgPost} onChange={ (e) => setInputImgPost(e.target.value)} />

      <button className='BtnCriar' onClick={btnAddPost}>Criar Novo Post</button>
    </form>

    {renderPost}
  </MainContainer>
)
}


export default App;
