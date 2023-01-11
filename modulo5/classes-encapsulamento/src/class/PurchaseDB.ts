import { Knex } from "knex";

import { TABLE_PURCHASES } from "../database/tableNames";

export class PurchaseDB{
  private connection: Knex;

  constructor(connection:Knex){
    this.connection = connection;
  }

  public insertPurchase = async (value: (string|number)[]) => {
    const newPurchase = {
      id: value[0],
      user_id: value[1],
      product_id: value[2],
      quantity: value[3],
      total_price: value[4]
    }
    await this.connection(TABLE_PURCHASES).insert(newPurchase)
  }
}