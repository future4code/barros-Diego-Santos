import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {
  private userBusiness = new UserBusiness(); 
  public signup = async (req: Request, res: Response):Promise<void> => {
    try{
      const { name, nickname, email, password } = req.body;
        const input: UserInputDTO = {
          name,
          nickname,
          email,
          password,
        };      
      const token = await this.userBusiness.signup(input);
      res.status(201).send({ message: "Usuário criado!",token });
    }catch(error: any){
      res.status(400).send(error.message);
    }
  };    

  public editUser = async (req: Request, res: Response):Promise<void> => {
    try{    
      const input: EditUserInputDTO = {
        name: req.body.name,
        nickname: req.body.nickname,
        token: req.headers.authorization as string
      };
  
      await this.userBusiness.editUser(input);
    
      res.status(201).send({ message: "Usuário alterado!" });
    }catch(error: any){
      res.status(400).send(error.message);
    }
  }; 
 
  public login = async (req: Request, res: Response):Promise<void> => {
    try{
      const {email, password } = req.body;
        const input: LoginInputDTO = {
          email,
          password,
        };      
      const token = await this.userBusiness.login(input);
      res.status(201).send({token});
    }catch(error: any){
      res.status(400).send(error.message);
    }
  };
  
  public getProfile = async(req: Request, res: Response):Promise<void> => {
    try{
      const token = req.headers.authorization as string;
      
      const userProfile = await this.userBusiness.getProfile(token); 
      
      res.status(201).send(userProfile);
    }catch(error: any){
      res.status(400).send(error.message);
    }
  };

}
