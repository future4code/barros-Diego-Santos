import axios from "axios";
import React, {useState, useEffect} from "react";



export const useSubmitData = (data) => {
  const [ dataSubmitted, setDataSubmitted ] = useState(false)
  const [ dataSubmittedError, setDataSubmittedError ] = useState("")

  useEffect( () => {
    axios
      .get(data)
      .then( (Response) =>{
        setDataSubmitted([true,"deu certo no envio",Response])
      }) 
      .catch( (error) =>{
        setDataSubmittedError("Erro no envio da inscrinção" + error)
      })

  },[])

  return [dataSubmitted,dataSubmittedError]
}