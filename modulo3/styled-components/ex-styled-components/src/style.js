import styled from "styled-components";


export const CorpoPagina = styled.div `
    width: 100%;
    height: 100vh;
    background-color: rgb(255, 117, 24);
`
export const Cabecalho = styled.header `
    background-color: #eee;
    height: 12vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ImagemLogo = styled.div `
    background-image: url(${(props) => props.ImgLogo});
    width: 70px;
    height: 70px;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;
`
export const TituloPagina = styled.h1 `
    font-size: 60px;
    font-style: italic;
    text-shadow: 1px 1px 2px #000;
`

export const SecaoPrincipal = styled.main `
    background-color: #eee;
    height: calc(100vh - 20vh);
    width: 70vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    font-size: 18px;

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
`
// ---------------//// -------------------///// -----------------------

// Abaixo configuracao do Formulario ////
// toda configuracao do formulario estarão escrita na variavel Formulario!!!!
 // as variaveis PalavraInput, FormularioInput  e  Botao,  tambem vao ser estilizados
 // aqui na variavel Formulario, queria ver se funcionava assim e funciona!
   // entao vou fazer dessa forma, PS: a função das variaveis ContainerInput, PalavraInput, FormularioInput  e  Botao é so de criar o conteudo :).
// PS: pensei em fazer toda estilizacao em uma variavel mas poderia ficar muito confuso para outras pessoas entao vou deixar so nessa aqui
// PS de novo :), nao vi essa forma de usar o style components em nenhum, vi que funciona assim tentando e me perguntando se funcionaria de tal forma

// estilo dessa varuavel na variavel Formulario //   
export const ContainerInput = styled.div ``
// estilo dessa varuavel na variavel Formulario //
export const PalavraInput = styled.label ``
// estilo dessa varuavel na variavel Formulario //
export const FormularioInput = styled.input ``
// estilo dessa varuavel na variavel Formulario //
export const Botao = styled.button ``


export const Formulario = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto 10px;

    //abaixo configuracao das Variaveis ContainerInput, PalavraInput, FormularioInput e Botao
    ${ContainerInput}{
        border: 1px solid transparent;
        padding: 5px;
        margin: 5px;
    }
    ${FormularioInput}{
        margin: 0 5px;
        font-size: 15px;
        border-radius: 5px;
    }${FormularioInput}:hover {
        box-shadow: 1px 2px 3px #000;
    }
    ${Botao}{
        padding: 2px 5px;
        margin: 0 5px;
        font-size: 15px;
        border-radius: 5px;
    }${Botao}:hover {
        box-shadow: 1px 2px 4px #000;
    }

    
    @media (max-width: 600px){
       display: flex;
       flex-direction: column;
       justify-content: center;
       ${FormularioInput}{
           display: block;
       }
       ${Botao}{
           margin-top: 10px;
       }
    }
`
// -----------------------///// Fim da parte formulario ///// ----------------///

// estilização do Copyright na variavel RodaPe ////
export const Copyright = styled.p ``
// estilização do LinkLabenu na variavel RodaPe //// 
export const LinkLabenu = styled.a ``

export const RodaPe = styled.footer `
    height: 8vh;
    font-size: 14px;
    background-color: #000000;
    color: #eee;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    ${Copyright}{
        font-style: italic;
        margin: 2px 0;
    }
    ${LinkLabenu}{
        color: #eee;
        text-decoration: none;
    }${LinkLabenu}:hover{
        color: rgb(255, 117, 24);
    }
`

