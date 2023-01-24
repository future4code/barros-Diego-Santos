import { Request,Response } from "express"

export const ping = async (req:Request, res:Response) => {
  let erroCode = 400;
  try{
    await res.status(200).send("pong")
  }catch(error:any){
    res.status(erroCode).send({message: error.message})
  }
}
