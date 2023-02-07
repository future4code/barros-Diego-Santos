import { UserDatabase } from "../data/UserDatabase"
import { CustomError } from "../error/CustomError";
import { InvalidData } from "../error/UserError";
import { UserDTO, UserInputDTO } from "../model/UserDTO";
import { generateId } from "../services/generateId";


export class UserBusiness {
  private userDatabase = new UserDatabase();

  create = async (input:UserInputDTO):Promise<void> => {
    try{
      const {name, email, password} = input;
      if (!email || !name || !password) {
        throw new InvalidData
      };

      const newUser: UserDTO = {
        id: generateId(),
        name: input.name,
        email: input.email,
        password: input.password
      };

      await this.userDatabase.create(newUser)
    }catch(error:any){
      throw new Error(error.message)
    }
  };
  // ------------------------------------------------------//
  getUsers = async ():Promise<UserDTO[]> => {
    try{
      const result = await this.userDatabase.getUsers();

      return result
    }catch(error:any){
      throw new CustomError(error.statusCode, error.message) 
    }
  };

}
