import React from "react";

import {ContainerImg, ImgBackGround, ImgProfile, TextProfile} from "../style"


export const CardPessoa = ( {personProfile,pegarImg}) => {

    const profileInformation = personProfile.map( (info) => {
        return  <TextProfile key={info.id}> 
                    <p>{info.name}</p>
                    <span>{info.bio}</span>
                </TextProfile>
    })

    return (
        <ContainerImg >
            <ImgBackGround pegarImg={pegarImg.photo}/>
            <ImgProfile src={pegarImg.photo} alt={pegarImg.photo_alt}/>
            {profileInformation}
        </ContainerImg>
    )
}


// codigo abaixo foi um teste de uma renderizacao condicional
// const [teste,setTeste] = useState([personProfile])
// return (
//     <>
//     {teste.length > 0 ? 
//     <ContainerImg >
//         <ImgBackGround pegarImg={pegarImg.photo}/>
//         <ImgProfile src={pegarImg.photo} alt={pegarImg.photo_alt}/>
//         {profileInformation}
//     </ContainerImg> : <p>Carregando</p>}
//     </>
// )