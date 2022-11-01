import express,{ Response, Request} from "express";
import cors from "cors";
import { products } from "./data";
import * as types from "./type"

const app = express();
app.use(express.json());
app.use(cors());




// Exercicio 1 //
// Crie uma nova API do zero e desenvolva um endpoint de teste com método GET no path
 //“/test” que retorna a mensagem: “Servidor rodando na porta (colocar porta)!”. 
app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Servidor rodando na porta ( http://localhost:3003 )! ")
});

// --------------- // ------------ // ---------------- // --------------- // ---------- //

// Exercicio 2 // 
// Crie um arquivo chamado data.ts que exporta um array de produtos. Cada produto será 
 //representado por um objeto com propriedades: id (string), name (string) e price
 //(number). Popule manualmente o array com pelo menos 3 produtos. 
 
// --------------- // ------------ // ---------------- // --------------- // ---------- //
// Exercicio 3 // 
// Crie um arquivo chamado type.ts que exporta o tipo produto. Agora vá no 
 //arquivo data.ts e faça a tipagem do array de produtos.
 
// --------------- // ------------ // ---------------- // --------------- // ---------- //
// Exercicio 4 //
// Desenvolva um endpoint que cria um novo produto e retorna a lista de 
 //produtos atualizada. A id do produto deve ser gerada automaticamente
 //pela API.
app.post("/products/newProduct", (req: Request, res: Response) => {
  const generateID = Math.floor(Date.now() * Math.random()).toString(36);
  const {name, price} = req.body;
  const newProduct: types.Product = { 
    name,
    id: generateID,
    price: Number(price)
  }
  products.push(newProduct)
   
  res.status(200).send(products)
})

// --------------- // ------------ // ---------------- // --------------- // ---------- //

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});