// Exercício 3
// A função recebe um ano e retorna um booleano (true ou false) que indica se o ano 
// é bissexto. Um ano é bissexto de acordo com as seguintes condições:

const userInput3 = require("readline-sync");
const year = Number(userInput3.question("Qual o ano ? "))

const checkLeapYear = (yea:number): boolean => {
  const cond1: boolean = yea % 400 === 0;
  const cond2: boolean = (yea % 4 === 0) && (yea % 100 !== 0);
  return cond1 || cond2
}
console.log(checkLeapYear(year))

