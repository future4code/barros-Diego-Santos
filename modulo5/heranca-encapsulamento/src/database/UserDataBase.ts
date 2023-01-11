import { Knex } from "knex";
import { BaseDataBase } from "./BaseDatabase";

export class UserDataBase extends BaseDataBase {
  private static TABLE_USERS = "Labe_Users";
  constructor(connection:Knex){
    super(connection)
  }
  public  getAllUsers = async () => {
    const result = await UserDataBase.connection(UserDataBase.TABLE_USERS).select()
    return  result
  };
  public creatUser = async (id:string,email:string,pass:string) => {
    const newUser = {
      id: id,
      email: email,
      password: pass
    }
    await UserDataBase.connection(UserDataBase.TABLE_USERS).insert(newUser);
  }
}