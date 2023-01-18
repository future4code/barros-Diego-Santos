
import { UserType } from "../types/UserType";
import { BaseDatabase } from "./BaseDatabase";

export class UserDb extends BaseDatabase {
  getUsers = async (table:string) => {
    try{
      return await BaseDatabase.connection(table).select();  
    }catch(error:any){
      throw new Error(error.message)
    }
  };
  // --- --- -- -- -- -- - -- - -- -- -- -- - --  //
  createUser = async (input:UserType):Promise <void> => {
    try{
      await BaseDatabase.connection.insert({
        id:input.id,
        name:input.name,
        email:input.email,
        password:input.password
      }).into("User_Arq");

    }catch(error:any){
      throw new Error(error.message)
    }
  };
  // --- --- -- -- -- -- - -- - -- -- -- -- - --  //
  deleteUser = async (id:string,table:string) => {
    try{
      await BaseDatabase.connection.from(table).where("id",id).delete()
    }catch(error:any){
      throw new Error(error.message)
    }
  };

}