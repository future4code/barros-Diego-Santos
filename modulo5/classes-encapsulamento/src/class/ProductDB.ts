import { Knex } from "knex";
import { Product } from "./Product";
import {TABLE_PRODUCTS} from "../database/tableNames"

export class ProductDB{
  private connection: Knex;

  constructor(connection:Knex){
    this.connection = connection;
  }

  public insertProductDB = async (newProduct: Product):Promise <void> => {
    await this.connection(TABLE_PRODUCTS).insert(newProduct)
  };
  
  public getProducts = async () => {
    const result = await this.connection(TABLE_PRODUCTS).select();
    return result
  };
  public getProductId = async (productId:string) => {
    const result = await this.connection(TABLE_PRODUCTS).select().where({id: productId});
    return result
  };
}