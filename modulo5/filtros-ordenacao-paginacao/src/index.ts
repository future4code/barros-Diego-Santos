import express,{Request,Response} from "express";
import cors from 'cors';
import { connection } from "./dataBase/connection";

const app = express();

app.use(express.json());

app.use(cors());

// Exercicio 1
// A) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber
// um parâmetro de filtragem por nome. Este nome deve ser enviado por query params.
app.get("/users",async (req:Request,res:Response):Promise <void> => {
  let errorCode = 400;
  let  name = req.query.name as string;
  let result:object[] = []
  try{
    if(name){
      result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        WHERE name = "${name}";
      `)
    }else {
      result = await connection.raw(`
        SELECT * FROM aula48_exercicio
      `)
    }

    res.send(result[0])

  }catch(error:any){
    res.status(errorCode).send(error.message)
  }
});
// B)Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem
// por tipo de user. O tipo de user deve ser passado por path params.
app.get("/users/:userType",async (req:Request,res:Response):Promise <void> => {
  let errorCode = 400;
  let userType = req.params.userType;
  
  try{
    if(!userType || userType === ":userType"){
      errorCode = 422;
      throw new Error("Passe o tipo no userType");
    }
    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE type = "${userType}";
    `)
  
    if(result[0].length < 1){
      errorCode = 404;
      throw new Error(`Não existe nenhum usuario com o tipo ${userType} `); 
     
    }
    res.status(200).send(result[0])
  }catch(error:any){
    res.status(errorCode).send(error.message)
  }
})

// Exercicio 2
app.get("/usersOrdenado", async(req: Request,res: Response): Promise<void> =>{
  let errorCode = 400;

  let sortBy = req.query.sortBy as string;
  let orderBy = req.query.orderBy as string;
  try {
    if(!sortBy){
      sortBy = "email"
    }
    if(!orderBy){
      orderBy = "ASC"
    } else if(orderBy.toLocaleLowerCase() !== "asc" && orderBy.toLocaleLowerCase() !== "desc"){
      orderBy = "ASC"
    }
    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio ORDER BY ${sortBy} ${orderBy}
    `)

    res.status(200).send(result[0])
     
  } catch(error:any){
    console.log(error)
    res.status(errorCode).send(error.message || error.sqlMessage)
  }
});

// Exercicio 3
app.get("/usersLimit",async(req: Request,res: Response): Promise<void> =>{
  let errorCode = 400;
  let page = Number(req.query.page);
  let size = 5;
  try{
    if(isNaN(page) || page < 1) {
      page = 1
    }
    if (page >= 6){
      errorCode = 409;
      throw new Error("Numero maximo de paginas é  5")
    }
    let offset = size * (page - 1)
    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio LIMIT ${size} OFFSET ${offset}
    `)
    res.status(200).send(result[0])

  }catch(error:any){
    console.log(error)
    res.status(errorCode).send(error.message || error.sqlMessage)
  }

});
app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});