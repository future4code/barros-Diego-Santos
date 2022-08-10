import React from "react";
import { useNavigate,useParams } from "react-router-dom";




export const ListTripPage = () => {

    const navigate = useNavigate()

    return(

        <>
        <p> Para vermos todas as viagens </p>
        <button onClick={ () => navigate(-1)}>Voltar</button>
        <button onClick={ () => navigate("/trip/application")}>inscrever-se para viagem</button>
        </>
    )
    
}


// isso aqui foi um teste depois eu apago caso nao va ser ultilizado
// const pathParams = useParams()
    // const logged = pathParams.user;
    // return(
    //     <>
    //         { logged === "admin" ? 
    //             <p>exibir lista para o  usuario admin</p> 
    //         : 
    //             <>
    //                 <p> Para vermos todas as viagens </p>
    //                 <button onClick={ () => navigate(-1)}>Voltar</button>
    //                 <button onClick={ () => navigate("/trip/application")}>inscrever-se para viagem</button>
    //             </>
    //         }
    //     </>
    // ) 