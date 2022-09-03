
import React, {useState, useEffect} from "react";



export const useSubmitDataForm = (data) => {
  const [ formData, setFormData ] = useState(data)  

  const onChange = (event) => {
    const {name, value} = event.target;
    setFormData( { ...formData, [name]: value } )
  }
  const clear = () => {
    setFormData(data)
  }

  return [formData, onChange, clear]

}