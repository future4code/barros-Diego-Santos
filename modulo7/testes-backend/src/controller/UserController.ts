import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { User } from "../model/UserModel";
export class UserController {
  constructor(private userBusines: UserBusiness){}

  public getUserById = async (req:Request, res:Response):Promise<void> => {
    try{
      const id = req.params.userId

      const user:User|undefined = await this.userBusines.getUserById(id); 
      res.status(200).send(user);
    }catch(error:any){
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  };
}