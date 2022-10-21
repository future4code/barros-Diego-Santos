import {userInput} from "../userInput";
// Crie um função que receba uma string com o nome e outra string com
 //uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia,
 //o mês e ano e retornar uma string no seguinte formato:

  //"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"//
const name:string = userInput.question("Digite seu nome ");
const date: string = userInput.question("Data de nascimento ex: 00/00/0000 ! ");
  
const exercicio1 = (name:string, date:string):string => {

  const dateResult: string[] = date.split("/");
  const day:string = dateResult[0];
  const month:string = dateResult[1];
  const year:string = dateResult[2];
  return `Olá me chamo ${name}, nasci no dia ${day}, do mês de ${month} do ano de ${year}`
} 
console.log(exercicio1(name,date));