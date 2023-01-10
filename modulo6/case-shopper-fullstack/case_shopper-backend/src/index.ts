import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { createClient } from "./endpoints/createClient";
import { getAllClients } from "./endpoints/allClients";
import { getAllProducts } from "./endpoints/allProdutcts";
import { createOrder } from "./endpoints/createOrder";
import { getStock } from "./endpoints/stock";

const app = express();

app.use(express.json());
app.use(cors());



app.get("/ping", ping)

app.get("/stock", getStock);
app.get("/clients", getAllClients);
app.get("/products", getAllProducts);

app.post("/client", createClient);
app.post("/order", createOrder)



console.log(new Date().toISOString().slice(0,10))



app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003!")
});
// import { Request, Response } from "express"
// import { connection } from "./database/connections";




// const getUsers = async (req: Request, res: Response) => {
//   console.log("entrou na funcao")
//   try {
//     const result = await connection("Users").select()
  
//     res.status(200).send({ users: result })
//   } catch (error) {
//     res.status(400).send({ message: error.message })
//   }
// }

// app.get("/teste",getUsers)