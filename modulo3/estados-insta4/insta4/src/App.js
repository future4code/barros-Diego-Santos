import React from 'react';
import Post from './components/Post/Post';

import { MainContainer } from './style.js'


function App() {
return(
  <MainContainer>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/200'}
          />
          <Post
            nomeUsuario={'Francisco'}
            fotoUsuario={'https://picsum.photos/50/51'}
            fotoPost={'https://picsum.photos/200/180'}
          />
          <Post
            nomeUsuario={'Joseph'}
            fotoUsuario={'https://picsum.photos/50/48'}
            fotoPost={'https://picsum.photos/200/170'}
          />
          <Post
            nomeUsuario={'Fernanda'}
            fotoUsuario={'https://picsum.photos/50/49'}
            fotoPost={'https://picsum.photos/200/190'}
          /> 
          <Post
          nomeUsuario={'Rafael'}
          fotoUsuario={'https://picsum.photos/50/47'}
          fotoPost={'https://picsum.photos/200/192'} 
          />
  </MainContainer>
)

}


export default App;
