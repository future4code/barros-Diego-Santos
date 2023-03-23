import { UserRepository } from "../business/UserRepository";
import { User } from "../model/UserModel";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/CustomError";

export class  UserDatabase extends BaseDatabase implements UserRepository{
  private Table_name = "User_Arq"

  public getUserById = async (id: string): Promise<User | undefined>  => {
    try{
      const user = await UserDatabase.connection(this.Table_name).select().where("id",id);

      let result:User| undefined;

      [user.length === 0 ? result = undefined : result = user[0]]
      return result;
    }catch(error:any){
      throw new CustomError(error.statusCode, error.message);
    }
  }
}