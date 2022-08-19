import axios from "axios";
import React, {useState, useEffect} from "react";



export const useRequestData = (url,headers) => {

  const [ listTripData ,setListTripData ] = useState([])
  const [ isloading , setIsloading] = useState(false)
  const [ listTripDataError, setListTripDataError] = useState([])

  useEffect( () => {
    setIsloading(true)
    axios
      .get(url,headers)
      .then( (response) => {
        setIsloading(false)
        setListTripData(response.data)
      })
      .catch( (error) => {
        setIsloading(false)
        setListTripDataError(error)
      })

  },[url])

  return [ listTripData, isloading, listTripDataError]
}