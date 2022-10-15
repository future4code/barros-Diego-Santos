// Exercício 2  
// A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e
//imprime no console um array que contenha essas três cores. Refatore a função para 
//o Typescript.
// const cor1: string = userInput.question("Insira sua primeira cor favorita ");
// const cor2: string = userInput.question("Insira sua segunda cor favorita ");
// const cor3: string = userInput.question("Insira sua terceira cor favorita ");
const userInput2 = require("readline-sync");

const printThreeFavoriteColors = ():void => {
  const color1: string = userInput2.question("Insira sua primeira cor favorita: ");
  const color2: string = userInput2.question("Insira sua segunda cor favorita: ");
  const color3: string = userInput2.question("Insira sua terceira cor favorita: ");
  return console.log([color1,color2,color3])
}
printThreeFavoriteColors()