import {Request,Response} from "express";
import { connection } from "../database/connections";

export const createClient = async (req:Request, res:Response) => {
  let errorCode = 400;
  try{  
    const name = req.body.name;
    if(!name){
      errorCode = 422;
      throw new Error("Insira um nome");
    }
    const getClients = await connection("Case_Shopper_Clients").where("name",name)

    if(getClients && getClients.length > 0 && getClients !== undefined){
      if(getClients[0].name === name){
        errorCode = 409;
        throw new Error(`O cliente ${name} ja está cadastrado!`)
      }
    }
    await connection("Case_Shopper_Clients").insert({name});
    res.status(200).send("cliente criado com sucesso")
  }catch(error:any){
    res.status(errorCode).send(error.message)
  }

}