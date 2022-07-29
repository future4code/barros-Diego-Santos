import React, {useState } from "react";
import axios from "axios";

import {CreatUserForm} from './components/CreatUserForm'
import {ShowAllUsers} from './components/ShowAllUsers'

function App() {
  const [inputName, setInputName ] = useState("");
  const [inputEmail, setInputEmail ] = useState("");

  const [inputFilter, setInputFilter ] = useState("")

  const [allUsers, setAllUsers ] = useState([]);

  const headers = { 
    headers: { 
      Authorization: "diego-rios-santos-barros"
    } 
  };
  const body = {
    name : inputName,
    email : inputEmail
  }; 
  const url =
   "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
 


  // Parte que mostra os usuarios  
  const ShowUsers = () => {
    axios
      .get(url,headers,body)
      .then( (response) => {
        setAllUsers(response.data)
        console.log(response)
      })
      .catch( (erro) => {
        console.log(erro.response)
      })
    
  };
  // Abaixo parte que deleta o usuario
  const deletUser = (userId) => {
    axios
      .delete(url + "/" + userId,headers)
      .then( (response) => {
        alert("O usuario foi deletado")
      })
      .catch( (erro) => {
        alert("Algo deu errado no delet")
        console.log(erro)
      });
    ShowUsers()    
  }
  // Abaixo a parte de filtragem pelo nome // ------------- ///////////-
  axios
    .get(url + "/search?name=" + inputFilter + "&email=",headers)
    .then( (response) => {
    })
    .catch( (erro) => {
      alert("Algo deu errado na filtragem de usuario")
      console.log(erro)
    });
  //// ------------------------ //////// ------------- ///////////////////  
  return (
    <div className="App">
      <CreatUserForm
        inputName={inputName}
        setInputName={setInputName}

        inputEmail={inputEmail}
        setInputEmail={setInputEmail}


        url={url}
        headers={headers}
        body={body}
      />
      
      <button onClick={ShowUsers}>Exibir usuarios Cadastrados</button>
      {allUsers
      .filter( (user) => user.name.includes(inputFilter) )
      .map( (user) => {
        return (
          <ShowAllUsers key={user.id} deletUser={deletUser} id={user.id}>
            {user.name}
          </ShowAllUsers>
        )
      })}
      <input 
        placeholder="Digite um nome"
        type="text"
        value={inputFilter}
        onChange={(e) => setInputFilter(e.target.value)}
      /> 
    </div>
  );
}

export default App;
