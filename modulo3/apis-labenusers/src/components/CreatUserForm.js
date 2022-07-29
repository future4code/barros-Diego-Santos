import React from "react";
import axios from "axios";


export const CreatUserForm = (props) => {

    const creatUser = (event) => {
        event.preventDefault()
        
        axios
          .post(props.url,props.body,props.headers)
          .then( () => {
            alert("Usuario Criado Com sucesso!")
          })
          .catch( (erro) => {
            alert("Algo deu errado")
          })
    
        props.setInputName("")
        props.setInputEmail("")
      }

    return (
        <div>
          <form>
            <fieldset>
              <label>Nome</label>
                <input
                  type="text"
                  value={props.inputName}
                  onChange={ (event) => props.setInputName(event.target.value)}
                />
            </fieldset>
            <fieldset>
              <label>Email</label>
              <input
                type="email"
                value={props.inputEmail}
                onChange={ (event) => props.setInputEmail(event.target.value)}
              />
            </fieldset>
            <button onClick={creatUser} >
              Enviar
            </button>
          </form>
        </div>
    )
} 