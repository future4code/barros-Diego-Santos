import { Knex } from "knex";

export  abstract class BaseDataBase {
  protected static connection:Knex;
  

  constructor(connection:Knex){
    BaseDataBase.connection = connection
  }
}  