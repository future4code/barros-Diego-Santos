import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import { CardPequeno } from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://cdn.dicionariopopular.com/imagens/cafbe07867c53ad097a4d2ef374c01e8.jpg" 
          nome="Diego" 
          descricao="Ola, me chamo Diego, tenho 23 anos moro na Bahia, trabalho como vendendor em uma loja de produtos naturais."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BmWnnEGVDDxbM3TolxCZ_R9hVKieDA9Pl3UkhHM&s"
          texto="Email:" texto2=" heroicstone223@hotmail.com"
        />

        <CardPequeno 
          imagem="https://w7.pngwing.com/pngs/549/432/png-transparent-address-computer-icons-map-icon-miscellaneous-angle-heart.png"
          texto="Endereço:" texto2=" Logo ali,"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="http://img.sitemercado.com.br/produtos/10c8999eb68c61df330e5a95a068cdbedcda2bc0486b9ccc481de7ba5799a407_full.jpg" 
          nome="Vital Ervas" 
          descricao="Vendendo saúde, ou quase isso :), por 7 anos.
          Vendemos desde xaropes para gripe, a cosméticos para pele "
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Apontando defeitos."  //vou deixar isso so pra ficar muito pequena a pagina
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        /> 

        <ImagemButton 
          imagem="https://imagens-revista-pro.vivadecora.com.br/uploads/2017/10/como-usar-o-linkedin-para-empresas.png" 
          texto="Linkedin" 
        /> 

        <ImagemButton 
          imagem="https://baixaraplicativo.com/wp-content/uploads/2020/11/Instagram-Lite-250x250.png" 
          texto="Instagram" 
        />
              
      </div>
    </div>
  );
}

export default App;
