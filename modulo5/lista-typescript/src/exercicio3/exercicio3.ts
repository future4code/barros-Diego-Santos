// Você foi contratado por um serviço de streaming para organizar o sistema de 
 //catálogos de filmes. Cada filme possui 3 informações essenciais: 1. nome
 //do filme; 2. ano de lançamento e 3. gênero do filme. Os gêneros da plataforma se 
 //limitam aqueles encontrados no seguinte ENUM de gêneros: 

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
} 

type Metacritic = {
  nome:string ,
  ano:number ,
  genero:GENERO ,
  nota?:number
}
const exercicio3 = (nome:string ,ano:number ,genero:GENERO ,nota?:number):Metacritic => {
  let resultado: Metacritic;
  (nota ? 
    resultado = {nome: nome, ano: ano, genero: genero, nota: nota} 
      :
    resultado = {nome: nome, ano: ano, genero: genero}
  )
  return resultado
}
// com o parametro opcional //
console.log(exercicio3("A volta dos que não foram",1999,GENERO.COMEDIA,100)) 
// abaixo sem o parametro opcional //
console.log(exercicio3("Kalamanaia",2019,GENERO.DRAMA))
