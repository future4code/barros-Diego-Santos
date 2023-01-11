import { Knex } from "knex";
import { TABLE_USERS } from "../database/tableNames";
import { User } from "./User";
export class UserDB{

  constructor( private connection:Knex ){
    this.connection = connection;
  }

  public getUsers = async () => {
    const result = await this.connection(TABLE_USERS).select();
    return result
  };
  public getUserId = async (userId:string) => {
    const result = await this.connection(TABLE_USERS).select().where({ id: userId});
    return result
  }
  public insertUser = async (newUser:User) => {
    await this.connection(TABLE_USERS).insert(newUser) 
  };
}