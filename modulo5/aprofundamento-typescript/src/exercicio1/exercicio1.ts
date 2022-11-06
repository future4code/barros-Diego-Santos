// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, 
//então vamos conhecer um pouco desses critérios.

// a) Crie uma variável minhaString do tipo string e atribua um valor a ela.
//Tente atribuir um número a esta variável. O que acontece?
let minhaString: string = "minhaString";
// minhaString = 1

// Resposta: o typeScript nao deixa eu colocar um valor diferente de string a essa variavel;

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
//Como fazer para que essa variável também aceite strings? Ou seja, como criamos no 
//typescript uma variável que aceite mais de um tipo de valor?

// let meuNumero: number = 100 ;

// Reposta: podemos ultiliza o pipe ( | ) na criaçao da variavel,  que repezenta ( ou ),
// ex: Abaixo! 
let meuNumero: string | number = "agora pode usar uma string"

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
// Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos  campos.

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher 
// entre as cores do arco-íris. Utilize um enum para isso.

enum FavoriteColors {
  RED = "Vermelho" ,
  ORANGE = "Laranja" ,
  YELLOW = "Amarelo" ,
  GREEN = "Verde" ,
  BLUE = "Azul" ,
  DARKBLUE = "Azul-Escuro",
  violete = "Violeta"
} ;
type Person = {
  name: string ,
  age : number ,
  favoriteColor: FavoriteColors
} ;

const pessoa1: Person = {
  name: "Diego" ,
  age: 23 ,
  favoriteColor: FavoriteColors.DARKBLUE
} ;

const pessoa2: Person = {
  name: "Maria" ,
  age: 23 ,
  favoriteColor: FavoriteColors.ORANGE
} ;
const pessoa3: Person = {
  name: "Fernanda" ,
  age: 19 ,
  favoriteColor: FavoriteColors.YELLOW
} ;

console.table(pessoa1);
console.table(pessoa2);
console.table(pessoa3);