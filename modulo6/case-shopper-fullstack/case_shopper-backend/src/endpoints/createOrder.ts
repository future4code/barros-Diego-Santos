import {Request,Response} from "express";
import { connection } from "../database/connections";
import { TProduct } from "../models/Products";

export const createOrder = async (req:Request, res:Response) => {
  let errorCode = 400;
  try{  
    const delivey_Date = req.body.delivey_Date;
    const fk_Client = req.body.fk_Client;
    const  products:TProduct[] = req.body.products;

    if(!delivey_Date || !products || !fk_Client){
      errorCode = 422;
      throw new Error("Body invalido");
    }

    // Verifica a quantidade
    for(let i = 0; i < products.length; i++){
      // pega o stock do produto
      const getStock = await connection.select("qty_stock").from("Case_Shopper_Products")
       .where({id:products[i].id});

      if(!getStock || getStock.length < 1 || getStock === undefined){
        errorCode = 409
        throw new Error("Id do produto invalido")
      }
      const stockAtual = Number(getStock[0].qty_stock);
      if(stockAtual < products[i].qty){
        errorCode = 409
        throw new Error("Estoque indisponivel");
      }
    }
    await products.map( async product => {
      // adiciona o pedido / faz o registro
      const getStock = await connection.select("qty_stock").from("Case_Shopper_Products")
       .where({id:product.id});
      const stockAtual = Number(getStock[0].qty_stock);
      await connection("Case_Shopper_Orders").insert(
        { 
          order_Date:new Date().toISOString().slice(0,10),
          delivey_Date,
          qty_stock:product.qty,
          fk_Client,
          fk_Product: product.id  
        }
      );
      // Atualizar o stock 
      await connection("Case_Shopper_Products")
       .where({id:product.id}).update({qty_stock:stockAtual - product.qty}); 
    });

    res.status(201).send("Pedido Criado")
  }catch(error:any){
    res.status(errorCode).send(error.message)
  }

}