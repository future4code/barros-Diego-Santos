import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO, UserInputDTO } from "../model/UserDTO";
import { CustomError } from "../error/CustomError";

export class UserController {
  private userBusiness = new UserBusiness();

  create = async(req: Request, res: Response):Promise<void> => {
    try {
      const input:UserInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      };
      
      await this.userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  };
  getUsers = async (req:Request, res:Response):Promise<void> =>{
    try{  
      const result: UserDTO[] = await this.userBusiness.getUsers()
      
      res.status(200).send(result)
    }catch (error: any) {
      console.log(error)
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  };

}
