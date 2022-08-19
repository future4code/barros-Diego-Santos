import React ,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coodinator"

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect( ()=> {
        const token = localStorage.getItem("token")
        if (!token) {
            goToLogin(navigate)
        }
    },[])
}
