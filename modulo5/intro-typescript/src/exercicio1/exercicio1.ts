// Exercicio 1
// A seguinte função em JavaScript recebe como parâmetro os tamanhos dos três
//lados do triângulo: ladoA, ladoB, ladoC e retorna se ele é equilátero, isósceles ou 
//escaleno. Refatore a função para o Typescript. 
const userInput = require("readline-sync");

const ladoA = Number(userInput.question("Primeiro valor ? "));
const ladoB = Number(userInput.question("Segundo valor ? "));
const ladoC = Number(userInput.question("Terceiro valor ? "));

const checkTriagle = (a:number,b:number,c:number): string => {
  let triangle: string;
  ( a !== b && b !== c ? triangle = "Escaleno" :
    a === b && b === c ? triangle = "Equilátero" :
    triangle = "Isósceles"
  )
  return triangle
}
console.log(checkTriagle(ladoA,ladoB,ladoC));