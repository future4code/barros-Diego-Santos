console.log(" !!! -- Exercicio 2 -- !!! ")

// Crie uma aplicação Node que recebe uma string representando
//uma operação matemática e dois valores numéricos. O retorno deverá
//ser o resultado da operação selecionada utilizando os 2 valores
//fornecidos.
const operat = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

const operationMat = (operation, a,b) => {
  const calculate = (operation === "add" ? a + b :
   operation === "sub" ? a - b :
   operation === "mult" ? a * b :
   operation === "div" && a / b )
  return console.log(` O resultado de ${operation} ${a} e ${b} é ${calculate}`) 
}
operationMat(operat,num1,num2)