import React from 'react'
import './CardPequeno.css'


export function CardPequeno(props) {
    return (
        <div className='container-principal'>
            <img src={props.imagem} />
            <h4>{props.texto}<span>{props.texto2}</span></h4>
        </div>
    )
}