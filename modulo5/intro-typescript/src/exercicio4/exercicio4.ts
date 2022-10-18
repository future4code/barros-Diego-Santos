// Exercício 4 //
// A seguinte função recebe dois números como parâmetro e retorna a diferença
//entre o maior número e o menor. Dessa forma, refatore a função para o Typescript. 
const userInput4 = require("readline-sync");

const numb1 = Number(userInput4.question("Digite um numero! "));
const numb2 = Number(userInput4.question("Digite outro numero! "));
const compareTwoNumbers = (n1:number,n2:number):number => {
  let higherNumb:number;
  let smallerNumb:number;
  ( n1 > n2 ? 
    [higherNumb = n1, smallerNumb = n2] :
    [higherNumb = n2, smallerNumb = n1]
  );
  const difference:number = higherNumb - smallerNumb;
  return difference
}
console.log(compareTwoNumbers(numb1,numb2))