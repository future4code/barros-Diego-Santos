import { Request, Response } from "express";
import {connection} from "../database/connection";
import { Product } from "../class/Product";
import { ProductDB } from "../class/ProductDB";

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }
    
        const newProduct = new Product(Date.now().toString(),name,price);

        const conect = new ProductDB(connection);
        await conect.insertProductDB(newProduct);
        
        res.status(201).send({ message: "Produto criado", product: newProduct })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}