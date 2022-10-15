// Exercício 5  //
// A função abaixo recebe por parâmetro  o ano atual, o ano de nascimento de uma
//pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A 
//função retorna  uma string que indica se a carteira precisa ser renovada ou não. A 
//carteira precisa ser renovada segundo os seguintes critérios:
const userInput5 = require("readline-sync");
const currentYear = Number(userInput5.question("Ano atual ? "));
const yearOfBirth = Number(userInput5.question("Ano de nascimento ? "));
const yearOfInuess = Number(userInput5.question("Ano de emissao do RG ? "));
 
const checkRenovationRg = (
 currentY:number,yearBirth:number,yearInssue:number): string => {
  let age: number = currentY - yearBirth;
  let walletTime: number = currentY - yearInssue;
  if(age <= 20){
    return walletTime >= 5 ? "passou dos 5 anos precisa renovar" :
    "ainda não passou os 5 anos";
  } else if(age >= 20 || age <= 50 ){
    return walletTime >= 10 ? "passou dos 10 anos precisa renovar" :
    "ainda não passou os 10 anos";
  } else if(age > 50){
    return walletTime >= 15 ? "passou dos 15 anos precisa renovar" :
    "ainda não passou dos 15 anos"
  } else {
    return "error"
  }
}
console.log(checkRenovationRg(currentYear,yearOfBirth,yearOfInuess));