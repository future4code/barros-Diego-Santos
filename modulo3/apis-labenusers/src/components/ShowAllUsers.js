import React from "react";


export const ShowAllUsers = ( {children,deletUser,id}) => {

    return (
        <div> {children}  <button onClick={()=>deletUser(id)}>x</button> </div>
    )
}