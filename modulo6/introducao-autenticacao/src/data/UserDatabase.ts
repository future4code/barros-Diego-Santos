import { CustomError } from "../error/customError";
import { EditUserInput, UserProfile, UserT } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: UserT):Promise<void> => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (user: EditUserInput):Promise<void> => {
    try {
      await UserDatabase.connection
        .update({ name: user.name, nickname: user.nickname })
        .where({ id: user.id })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email:string):Promise<UserT> => {
    try {
     const user = await UserDatabase.connection("Auth_users").select().where("email",email)
     return user[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getProfile = async (id:string):Promise<UserT> => {
    try{
      const user = await UserDatabase.connection("Auth_users").select().where("id",id)
      return user[0];
    }catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

}
