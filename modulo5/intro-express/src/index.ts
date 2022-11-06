import express,{Request, Response} from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// exercicio 1) //
// url = http://localhost:3003/  //
app.get("/",(req:Request, res:Response) => {
  res.status(200).send("Hello world")
});

// exercicio 2) // 
type User = {
  id: number,
  name: string,
  phone: string,
  email: string,
  website: string
};

// exercicio 3) //
const users: User[] = [
  { id: 1,
    name: "Diego",
    phone: "91929394",
    email: "nananinha@hotmail.com",
    website: "unnamelass.site.org"
  },
  { id: 2,
    name: "Fernanda",
    phone: "91234654",
    email: "fernanda@gmail.com",
    website: "suaMaquiagem.org"
  },
  { id: 3,
    name: "Gabriel",
    phone: "91929394",
    email: "sefoi@outlook.com",
    website: "todoPeloAvesso.br"
  },
  { id: 4,
    name: "Daniela",
    phone: "919222294",
    email: "nananinha@hotmail.com",
    website: "pudinDeChocolate.com"
  },
  { id: 5,
    name: "Jordan",
    phone: "91934394",
    email: "cornosvald123@msg.com",
    website: "marracaoComMolho.site"
  },
  { id: 6,
    name: "Raiane",
    phone: "098765432",
    email: "maca231@hotmail.com",
    website: "feijaoComArroz.org"
  }
];


// exercicio 4) //
// url = http://localhost:3003/users  //
app.get("/users", (req:Request, res:Response) => { 

  res.status(200).send(users);
});

// exercicio 5) //
type Post = {
  id: number,
  title: string,
  body: string,
  userId: number
};

// exercicio 6) //
// resposta: pelo que entendi o userId no post ja é pra gente verificar e vincular com um usuario, sendo assim nao é preciso fazer os dois arrays juntos //
const posts: Post[] = [
  { id: 1,
    title: "Motivacional",
    body: "O ontem é história o amanhã é um mistério mas o hoje é uma dádiva. é por isso que se chama presente",
    userId: 1
  },
  { id: 2,
    title: "Triste",
    body: "Parece que quanto mais a gente quer, mais demora pra acontecer",
    userId: 2
  },
  { id: 3,
    title: "Sem sentido",
    body: "Não concordo nem discordo, muito pelo contrário",
    userId: 1
  },
  { id: 4,
    title: "Motivacional",
    body: "Sua mente é como água, Quando está agitado, fica dificil de ver, mas quando você deixa que se assente; a respota fica clara",
    userId: 4
  },
  { id: 5,
    title: "Motivacional",
    body: "Sua história pode não ter tido um começo feliz... Mas não é isso que define quem você é. É o restante da sua história, quem você escolhe ser",
    userId: 5
  },
  { id: 6,
    title: "Triste",
    body: "Quem sabe o amanhã não seja tão vazio para mim...",
    userId: 1
  },
  { id: 7,
    title: "Feliz",
    body: "A vida é feita de escolhas. HOje, escolha ser feliz!",
    userId: 6
  },
  { id: 8,
    title: "Triste",
    body: "Me acostumei com a tristeza e a decepção, mas talvez um dia elas me deixem.",
    userId: 3
  },
];

// exercicio 7) // 
// url = http://localhost:3003/users/posts  //
app.get("/users/posts", (req:Request, res: Response) => {

  res.status(200).send(posts);
});

// exercicio 8) //
// url = http://localhost:3003/users/posts/:userId  //
app.get("/users/posts/:userId", (req:Request, res: Response) => {
  const userId = req.params.userId;
  const verifyPost = posts.find( post => post.userId === Number(userId));
  const postFilter = posts.filter( post => post.userId === Number(userId)); 
  if(!verifyPost){
    return res.status(401).send("Id inexistente! Por favor digite outro");
  } else {
    return res.status(201).send(postFilter);
  }

});









app.listen(3003, () => {
  console.log("Servidor Em execução !")
})