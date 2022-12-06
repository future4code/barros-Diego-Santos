import { Request,Response } from "express";
import { connection } from "../data/connection";
import getAddressInfo from "./getAddresInfo";
import { Endereco,EnderecoInfo } from "../types";

export const addAdress = async (req:Request, res:Response):Promise <void> => {
  let errorCode = 400;
  
  try{
    const {cep, numeroCasa, complemento} = req.body;

    if(!cep || !numeroCasa || !complemento){
      errorCode = 422;
      throw new Error("Necessario prencer o cep, numeroCasa, complemento");
    };
    if(cep.length < 1){
      errorCode = 422;
      throw new Error("Por favor digite algum cep");
    }
    if(typeof(cep) !== "string" || typeof(numeroCasa) !== "string" || typeof(complemento) !== "string"){
      errorCode = 409;
      throw new Error("Todos os dados precisam ser em string");  
    }
    const endereco: EnderecoInfo =  await (await getAddressInfo(cep));

    const newEndereco: Endereco = {
      cep,
      logradouro: endereco.logradouro,
      numero: numeroCasa,
      complemento: complemento,
      bairro: endereco.bairro,
      cidade: endereco.cidade,
      estado: endereco.estado
    };
    
    await connection("Enderecos").insert(newEndereco)
      .then( ()=> console.log("valores adicionados"))
      .catch( () => console.log("deu algum erro em adicionar"))
    res.send(newEndereco)
    
  }catch(error:any){
    res.status(errorCode).send(error.message)
  };

};
