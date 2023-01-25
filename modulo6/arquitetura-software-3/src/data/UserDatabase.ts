import { UserDTO } from "../model/UserDTO";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/CustomError";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  create = async({ id, name, email, password }: UserDTO): Promise<void> => {
    try{
      await UserDatabase.connection.insert({
        id,
        name,
        email,
        password,
      }).into(UserDatabase.TABLE_NAME);

    }catch(error:any){
      throw new CustomError(error.statusCode, error.message) 
    }
  };

  getUsers = async ():Promise<UserDTO[]> => {
    try{
      return await UserDatabase.connection(UserDatabase.TABLE_NAME);
    }catch(error:any){
      throw new CustomError(error.statusCode, error.message) 
    }
  };
}
