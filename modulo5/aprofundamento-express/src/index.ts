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
type Task = {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
};
// ------- // ------------------ // ------------------- //

// Exercicio 3 //

const taskList: Task[] = [
  { "userId": 1,
    "title": "Fazer compras",
    "id": 1,
    "completed": false
  },
  { "userId": 2,
    "title": "Lavar roupas",
    "id": 2,
    "completed": true
  },
  { "userId": 1,
    "title": "Passear com o cachorro",
    "id": 3,
    "completed": false
  },
  { "userId": 2,
    "title": "Estudar",
    "id": 4,
    "completed": false
  },
  { "userId": 1,
    "title": "Jogar",
    "id": 5,
    "completed": true
  },
  { "userId": 1,
    "title": "Visitar a familia",
    "id": 6,
    "completed": false
  },
];
// ------- // ------------------ // ------------------- //

// Exercicio 4 //
app.get("/taskList/verify/:completed", (req:Request, res:Response) => {
  const taskCompleted = req.params.completed.toLowerCase();
  const completed:Task[] = taskList.filter( (task: Task) => {
    return task.completed.toString() === taskCompleted.toString()
  });
  res.status(200).send(completed)
});

// ------- // ------------------ // ------------------- //

// Exercicio 5 //
// nao precisa passar o id na hora de usar no postman //
app.post("/addNewTask", (req:Request, res:Response) => {
  const { userId, title, completed } = req.body;
  if(!userId){
    return res.status(400).send("Por favor Digite um numero no  userId")
  } else if(!title){
    return res.status(400).send("Por favor coloque o title")
  } else if(typeof completed === "string"){
    return res.status(400).send("Por favor digite o completed com um boleano no completed ex: true ou false")
  }

  const newTask:Task = {
    userId: Number(userId),
    id: taskList.length + 1,
    title: title,
    completed: completed
  };
  taskList.push(newTask);
  res.status(200).send(taskList);
});
// ------- // ------------------ // ------------------- //

// Exercicio 6 //
app.put("/taskList/:changeCompleted", (req:Request, res:Response) => {
  const taskId = req.headers.authorization;
  const  completed  = req.params.changeCompleted;
 
  const searchTask:Task | undefined = taskList.find( (task:Task) => {
    return task.id === Number(taskId)  
  });
  if(!searchTask) {
    return res.status(401).send("Id inexistente, por favor digite um id valido!")
  };

  if(completed === "false") {
    taskList.map( (task) => {
      if(task.id === Number(taskId)){
        task.completed = false
      }
    })
  } else if( completed === "true") {
    taskList.map( (task) => {
      if(task.id === Number(taskId)){
        task.completed = true
      }
    });
  } else {
    return res.status(401).send("Por favor Digite um booleano true ou false no params completed")
  };

  res.status(200).send(taskList)
});
// ------- // ------------------ // ------------------- //

// Exercicio 7 //
app.delete("/taskList/delete/:taskId",(req:Request, res:Response) => {
  const taskId = req.params.taskId;

  const searchTask:Task | undefined = taskList.find( (task:Task) => {
    return task.id === Number(taskId)  
  });
  if(!searchTask) {
    return res.status(401).send("Id inexistente, por favor digite um id valido!")
  };

  let index: number;
  const removeTask = ():void => {
    taskList.map( (task,i) => { //nao sei usar o indexOf direito entao fiz com o map //
      if(task.id === Number(taskId)){
        return index = i;
      }
    })
    taskList.splice(index,1)
  };
  removeTask()
  res.status(200).send(taskList)
});
// ------- // ------------------ // ------------------- //

// Exercicio 8 //
app.get("/taskList/:userId",(req:Request, res:Response) => {
  const userId = req.params.userId;
  const searchUser:Task | undefined = taskList.find( (user:Task) => {
    return user.userId === Number(userId)  
  });
  if(!searchUser) {
    return res.status(401).send("Id inexistente, por favor digite um id valido!")
  };
  const userTasks:Task[] = taskList.filter( (task: Task) => {
    return task.userId === Number(userId)
  }) 
  res.status(200).send(userTasks);
})
// ------- // ------------------ // ------------------- //

// Exercicio 9 // 
 // Criar uma documentaçao do postman
  // link da documentação https://documenter.getpostman.com/view/22376175/2s8YRdsFqD // 
// ------- // ------------------ // ------------------- //
app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});