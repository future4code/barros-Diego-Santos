import express,{Request, Response} from "express";
import cors from "cors";
import { users } from "./data";


const app = express();
app.use(express.json());
app.use(cors());


type User = {
  name: string,
  email: string,
  age: number,
  type: string,
  id: number
}
// Exercicio 1 //
// a)  Qual método HTTP você deve utilizar para isso?
 // Resposta: O metodo GET

// b) Como você indicaria a entidade que está sendo manipulada?
 // Resposta: pegando o id ou nome
app.get("/users", (req:Request, res:Response) => {
  let erroCode = 400;
  try {
    res.status(200).send(users)

  } catch(erro: any) {
  
  }
});


// -------------------- // ----------------------- // ---------------- //

// Exercicio 2 //
// a. Como você passou os parâmetros de type para a requisição? Por quê?
 // Resposta: Via queryParams, porque eu tentei usar o params  e ele pulava uma das verificações 
  // e por Body ou Headers nao fazia sentido, ja que o body é pra editar ou adicionar e o header e questao de autorização
// b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
 // Resposta: sim, ultizando um type para verificar ou um Enum.
app.get("/users/usersType", (req:Request, res:Response) => {
  let erroCode = 400;
  try {
    const usersType = req.query.usersType as string;
    
    if(!usersType){
      erroCode = 404;
      throw new Error("Passe o userType ex: NORMAL ");
    };

    const usersFiltered = users.filter( user => user.type === usersType)
    
    if(usersFiltered.length === 0 ){
      erroCode = 422;
      throw new Error("Parametro userType incorreto!");      
    };
    res.status(200).send(usersFiltered)

  } catch(erro: any) {  
    res.status(erroCode).send(erro.message)
  }

});
// -------------------- // ----------------------- // ---------------- //

// Exercício 3 //
// Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de 
 //busca que encontre um usuário buscando por nome.
// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
 // Resposta: tipo string, recebendo o valor por query ou params
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

app.get("/users/userName", (req:Request, res:Response) => {
  let erroCode = 400;
  try {
    const userName = req.query.userName as string;
    
    if(! userName){
      erroCode = 404;
      throw new Error("Passe um nome de usuario ex: batatinha ");
    };

    const userFiltered = users.find( user => 
      user.name.toLocaleLowerCase() ===  userName.toLocaleLowerCase()
    )
    
    if(!userFiltered){
      erroCode = 422;
      throw new Error("Usuario nao encontrado!");      
    };
    res.status(200).send(userFiltered)

  } catch(erro: any) {  
    res.status(erroCode).send(erro.message)
  }

});
// -------------------- // ----------------------- // ---------------- //

// Exercicio 4 // 
// Fizemos algumas buscas no nosso conjunto de itens, agora é hora de adicionar coisas. 
// Comecemos criando um usuário na nossa lista. Crie um endpoint que use o método POST
// para adicionar um item ao nosso conjunto de usuários.
// a. Mude o método do endpoint para PUT. O que mudou?
 // Resposta: não mudou nada, pq os medotados tem a funcao de somente ter a semantica
// b. Você considera o método PUT apropriado para esta transação? Por quê?
 // Resposta: nao considero apropriado, o correto seria msm o post quando se adiciona algo novo, e o put para alterar

app.post("/users/newUser", (req:Request, res:Response) => {
  let erroCode = 400;

  try {
    const {name, age, email, type} = req.body;

    if(!name || !age || !email || !type) {
      erroCode = 422;
      throw new Error("Passe as informacoes do usuarios corretas ex: nome, idade, email, e type");  
    } else if(typeof(name) !== "string" || 
      typeof(age) !== "number" || 
      typeof(email) !== "string" ||
      typeof(type) !== "string"
    ) {
      erroCode = 404;
      throw  new Error("Passe os dados do usuario corretos")
    } else if(type !== "NORMAL" && type !== "ADMIN"){
      erroCode = 404;
      throw  new Error("passe o tipo correto de conta, ex: NORMAL")
    }
    const newUser: User = {
      id: users.length + 1, 
      name:name, 
      email:email, 
      type: type, 
      age:age
    }
    users.push(newUser)

    res.status(201).send(users)
  } catch(erro: any) {
    res.status(erroCode).send(erro.message);
  };

});
 

// -------------------- // ----------------------- // ---------------- //
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});