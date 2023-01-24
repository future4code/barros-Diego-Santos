import {Request, Response} from "express";
import { UserBusiness } from "../business/UserBusiness";


export class UserController {
  private userBusiness = new UserBusiness();
  // --- --- -- -- -- -- - -- - -- -- -- -- - --  //
  getUsers = async (req:Request, res:Response):Promise<void> => {
    try{
      const result = await this.userBusiness.getUsers();
      res.status(200).send(result)
    }catch(error:any){
      throw new Error(error.message)
    }
  };
  // --- --- -- -- -- -- - -- - -- -- -- -- - --  //
  createUser = async (req:Request, res:Response):Promise<void> => {
    try{
      const input:any = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      };

      await this.userBusiness.createUser(input)
      res.status(201).send({ message: "Usuário criado!" })
    }catch (error:any){
      res.status(400).send(error.message)
    }
  };
  // --- --- -- -- -- -- - -- - -- -- -- -- - --  //
  deleteUser = async (req:Request, res:Response) => {
    try{
        const id = req.params.id;

        await this.userBusiness.deleteUser(id)
        res.status(201).send({message: "Usuário deletado com sucesso"})
    }catch (error:any){
      res.status(400).send(error.message)
    }
  };
}