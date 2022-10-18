// Considere que você esteja implementando uma rede social composta por posts de
//usuários. Cada um dos posts possui: um autor e um texto.
//Observe o seguinte array de posts:

// a) Copie o código acima para um arquivo .ts depois:
 // *  crie um type para representar um post;
 // * Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.

type Post = {
  autor: string ,
  texto: string
} 

const post: Post[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  } ,
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  } ,
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  } ,
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  } ,
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

// b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:
// Quais são as entradas e saídas dessa função? Copie a função para o mesmo arquivo 
 //.ts do array de posts e faça a tipagem necessária. 

 function buscarPostsPorAutor(posts:Post[], autorInformado:string): Post[] {
  return posts.filter(
    (post: Post) => {
      return post.autor === autorInformado
    }
  )
} ;

console.table(buscarPostsPorAutor(post,`${post[0].autor}`));
// fiz usando a craze na hora de passar o autor pra facilitar, mudando somente o index ja se tem um autor do post...