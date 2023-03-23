import { User } from "../model/UserModel";
import { UserRepository } from "./UserRepository";
import { CustomError, InvalidId } from "../error/CustomError";

export class UserBusiness {
  constructor(private userDatabase:UserRepository){};

  public getUserById = async (id: string): Promise<User>  => {
    try{
      if(!id || id === ":userId"){
        throw new InvalidId()
      }

      const user:User | undefined = await this.userDatabase.getUserById(id);
      if(!user){
        throw new CustomError(404,"User Not Found")
      }  
      return user;
    }catch(error:any){
      throw new CustomError(error.statusCode, error.message);
    }
  }
}