import React from "react";

import {ContainerImg, ImgBackGround, ImgProfile, TextProfile} from "../style"


export const CardPessoa = ( {personProfile, pegarImg}) => {


    return (
        <ContainerImg>
            <ImgBackGround pegarImg={pegarImg.photo}/>
            <ImgProfile src={pegarImg.photo} alt={pegarImg.photo_alt}/>

            {personProfile.map( (info) => {
            return  (
                <TextProfile key={info.id}> 
                    <p>{info.name}</p>
                    <span>{info.bio}</span>
                </TextProfile>
            )    
            })}
        </ContainerImg>
    )
}
