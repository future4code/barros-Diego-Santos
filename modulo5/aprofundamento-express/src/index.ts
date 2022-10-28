import express, {Request, Response}  from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());





// Exercicio 1 //

app.get("/ping", (req:Request, res:Response):void => {
  res.status(200).send("pong")
})
// ------- // ------------------ // ------------------- //

// Exercicio 2 //
type ToDos = {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
};
// ------- // ------------------ // ------------------- //

// Exercicio 3 //

const toDoList: ToDos[] = [
  { "userId": 1,
    "title": "Fazer compras",
    "id": Date.now(),
    "completed": false
  },
  { "userId": 2,
    "title": "Lavar roupas",
    "id": Date.now(),
    "completed": true
  },
  { "userId": 3,
    "title": "Passear com o cachorro",
    "id": Date.now(),
    "completed": false
  },
  { "userId": 4,
    "title": "Estudar",
    "id": Date.now(),
    "completed": false
  },
  { "userId": 5,
    "title": "Jogar",
    "id": Date.now(),
    "completed": true
  },
  { "userId": 6,
    "title": "Visitar a familia",
    "id": Date.now(),
    "completed": false
  },
];
// ------- // ------------------ // ------------------- //

// Exercicio 4 //
app.get("/toDoList/:completed", (req:Request, res:Response) => {
  const taskCompleted = req.params.completed;
  const completed:ToDos[] = toDoList.filter( (task) => {
    return task.completed.toString() === taskCompleted.toString()
  });
  // if(taskCompleted === "true") {
  //   return  res.status(200).send(completed)
  // }
  res.status(200).send(completed)
});

// ------- // ------------------ // ------------------- //

// Exercicio 5 //
app.post("/newTask", (req:Request, res:Response) => {
  const { userId , id, title, completed } = req.body;
  if(!userId  || !id ){
    return res.status(400).send("Por favor Digite um numero no id e no userId")
  } else if(!title){
    return res.status(400).send("Por favor coloque o title")
  } else if(!completed){
    return res.status(400).send("Por favor digite o completed com um boleano no completed ex: true ou false")
  }

  const newTask:ToDos = {
    userId: Number(userId),
    id: Number(id),
    title: title,
    completed: completed
  };
  toDoList.push(newTask)
  res.status(200).send(toDoList)
});
// ------- // ------------------ // ------------------- //

// Exercicio 6 //


// ------- // ------------------ // ------------------- //
app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});