import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  create = async({ id, name, email, password }: any): Promise<void> => {
    try{
      await UserDatabase.connection.insert({
        id,
        name,
        email,
        password,
      }).into(UserDatabase.TABLE_NAME);

    }catch(error:any){
      throw new Error(error.message)
    }
  };

  getUsers = async () => {
    try{
      return await UserDatabase.connection(UserDatabase.TABLE_NAME);
    }catch(error:any){
      throw new Error(error.message)
    }
  };
}
