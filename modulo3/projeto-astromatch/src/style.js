import styled from "styled-components"




export const ContainerCentral = styled.div `
    margin: 5% auto 0;
    box-shadow: 0 4px 8px #000;
    width: 400px;
    background-image: url(https://dpsmiles.net/profilbilder/38/herunterladen);
    border-radius: 20px;
    padding: 10px;
    
    @media (max-width: 600px){
      margin: 0 auto ;
      min-height: 100vh;
      border-radius:0;
      width: 100vw;
      padding: 0;
    }
`

// Todo CSS abaixo é do component CardPessoa ---///

export const ContainerImg = styled.div `
    margin: 50px auto 0;
    width: 80%;
    height: 50vh;
    box-shadow: 1px 3px 5px #000;
    position: relative;
    border-radius: 10px;
    background-color: #444;
`
export const ImgBackGround = styled.img `
    /* background-image: url( ${ (props) => props.pegarImg });  */
    background: linear-gradient( 20deg, #000 23% , transparent 35%),url(${(props) => props.pegarImg}) ;
    /* background-position: center;
    background-repeat: no-repeat; */
    background-size: cover;
    height: 100%;
    width: 100%;
    filter: blur(2px);
    z-index: -1;
    border-radius: 10px;
`
export const ImgProfile = styled.img `
    width: 100%;
    height: 70%;
    border: none;
    object-fit: cover;
    border-radius: 7px;
    margin-top: 20px;
   
    filter: opacity(100%);
    position: absolute;
    left: 0;
`
export const TextProfile = styled.div `
    position: absolute;
    color: #f3f3f3;
    z-index: 2;
    bottom: 5%;
    font-weight: bold;
    margin-left: 10px;
    p {
        line-height: 0.2;
        font-size: 19px;
    }
    span { 
        font-size: 15px;
    }
`
// ---------------/ /-------------------- //// ----------------------------//


/// Abaixo CSS do component ContainerBotao ///// --- //////////////////
export const Botao = styled.button `
    height: 80px ;
    width: 80px;
    border: 3px solid #fff;
    border-radius: 100%;
    color: #fff;
    background-color: #000;
    cursor: pointer;
    :hover {
        transform: scale(1.2)
    }
`
export const DivBotao = styled.div `
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: space-evenly;
    box-sizing: border-box;
    background-color: transparent;
    border-radius: 5px;
    align-items: center;
    margin: 10px 0;
    ${Botao}:nth-child(1){
        
        font-size: 40px;
        color: #fff;
        :hover{
            color: red;
            border: 3px solid red;
            background-color: transparent;
            box-shadow: 1px 2px 3px #000;
        }   
    }
    ${Botao}:nth-child(2){
        font-size: 40px;
        :hover {
            border:5px solid black;
        }
    }
`
////////////////////// ------------ -----------/  ////// --- /// -/////////////////////////////

/// Abaixo CSS do component ContainerMatch ------------ ////////-//////////-/-/-/-/-/-/
export const MatchContainer = styled.div `
    width: 100%;
    
    display: flex;
    flex-direction: column;
    @media (max-width: 500px){
        overflow-y: scroll;
        height: 500px;
    }
`

export const MatchPerfil = styled.div `
    height: 60px;
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 2px 3px #000000;
    border-radius: 10px;
    
    margin:10px auto;
    padding:10px 20px;
    background-color: #fff;
    font-weight: bold;
    :hover{
        box-shadow: 1px 3px 3px #000;
        transform: scale(1.06);
    }
`
export const MatchPhoto = styled.img `
    height: 100%;
    width: 60px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 2px 3px #000;
`
export const MatchInfo = styled.p `  
`
export const ListaMatchVazia = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    color: #fff;
    background-image: url( ${ (props) => props.imgTriste});
    background-position: left;
    object-fit: cover;
`
//--------------------------------------------------------------------////
export const Header = styled.div `
    display: flex;
    height: 60px;
    background-color: #fff;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 0 2px;
    box-shadow: 1px 2px 3px #444;
    border-radius: 6px 6px 0;
    position: relative;
    h2{ 
        margin: 0 auto;
        span:nth-child(1) {
            color: #66cc66;
        }
        span:nth-child(2) {
            color: #800080;
        }
    }
    button {
        height: 100%;
        width: 60px;
        border: none;
        border-radius: 10px 0 10px;
        cursor: pointer;
        :hover{
                box-shadow: 1px 2px 3px #800080;
            }
        img {
            height: 100%;
            width: 90%;
            background: transparent;
        }
        
    }
    .btnHeader {
        border-radius: 0 10px 0px;
        
        :hover{
                box-shadow: -1px 2px 3px #800080;
            }
    }
    .quantidadeMatches{
        position: absolute;
        right: 2%;
        top: 0;
        font-weight: bold;
        color: red;
    }
    @media (max-width: 600px) {
        border-radius: 0;
        .quantidadeMatches{
            font-size: 14px;
        }
    }
`

export const TelaCarregamento = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #fff;
    height: 400px;
    div{
        overflow: hidden;
        position: relative;
        ::after{
            background-color: #000;
            content: "";
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            animation: textLoad 1s cubic-bezier(0.85, 0, 0.15, 1) forwards;
        }
    }
    @keyframes textLoad {
        from {
            transform: translateX(-101%);
        }
        to {
            transform: translatex(101%);
        }
    } 
`

export const BtnDelet = styled.button `
    display: block;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 10px;
    margin: 35px auto 2px;
    border: none;
    font-size: 20px;
    background-color: transparent;
    border-bottom: 2px solid #000;
    color: #f3f3f3;
    cursor: pointer;
   
    :hover{
        box-shadow: 1px 2px 2px #000;
        color: yellow;
        transform: scale(1.4);
    }
`