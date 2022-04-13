// Exercícios de interpretação de código 1
/* let a = 10 // A recebe o valor de 10
   let b = 10 // B recebe o valor de 10

   console.log(b) // mostra o valor de b=10

   b = 5 // tem o valor alterado para 5
   console.log(a, b) //mostra o valor de a=10 , b=5 
*/

// Exercícios de interpretação de código 2
/*
   let a = 10 // A tem o valor atribuido a 10
   let b = 20 // B tem o valor atribuido a 20
   c = a  // C que nao tinha nenhum valor, agora tem o mesmo valor que A, que é 10
   b = c  // B que tinha o valor de 20 agora passa a ter o mesmo valor de c que é 10
   a = b  // A e B tem os mesmos valores, que é 10

   console.log(a, b, c) // mostra o valor de a=10, b=10, c=10 
*/

// Exercícios de interpretação de código 3
/*
   let p = prompt("Quantas horas você trabalha por dia?") 
   // let horasPorDia = prompt("texto")

   let t = prompt("Quanto você recebe por dia?")  
   // let valorPorDia = prompt("texto")

   alert(`Voce recebe ${t/p} por hora`) 
   // alert('voçê recebe ${valorPorDia / horasPorDia} por hora')
*/


//tudo abaixo é o Exercício de escrita de código

// -- atividade 1 --
/* 
   let nome; // valor indefinido
   let idade; // valor indefinido

// console.log( typeof nome, typeof idade) 
// os dois deram 'undefined' por que eu não atribuí um valor.

   nome = prompt("qual o seu nome ");
// idade = prompt("qual sua idade ");

// console.log( typeof nome, typeof idade);
// os dois deram string mas vou corrigir a variavel idade

   idade = Number(prompt("qual sua idade "));

// console.log( typeof nome, typeof idade);
// agora apareceu string e number

   alert('Olá ' + nome + ' você tem ' + idade + ' anos.')
// console.log('Olá ' + nome + ' você tem ' + idade + ' anos.')
/* nao sei se podia usar o alert ou se era pra fazer com o console.log,
   mas eu usei a virgura no lugar do +  e nao funcionou entao fiz com o + sem virgula
   e apertando espaço antes do parentezes fechar pra dar espaço na hora de me retornar o valor
*/


// -- atividade 2 --
/*
//perguntas
  let questao1= prompt("Você gosta de jogar? ");
  let questao2 = prompt("Tem animais em sua casa? ");
  let questao3 = prompt("Em relaçao ao curso, esta com dificuldades? ");

//respostas
   let gamer = questao1; 
   let dificuldade = questao3;
   let animais = questao2;

   console.log("Você gosta de jogar? -", gamer);
   console.log("Em relaçao ao curso, está com dificuldades? -",dificuldade);
   console.log("Tem animais em sua casa? -", animais);
*/

// -- atividade 3 --
/*
   let primeiroValor = 10
   let segundoValor = 25

   terceiroValor = primeiroValor

   primeiroValor = segundoValor

   segundoValor = terceiroValor

   terceiroValor = 0

   console.log("O novo valor do a é ", primeiroValor) 
    // O novo valor de a(primeiroValor) é 25
   console.log("O novo valor do b ",segundoValor)
    // O novo valor de b(segundoValor) é 10
*/

// --Desafio opcional --
//primeiro somando
let valor1 = 5
let valor2 = 3

console.log("O primeiro número somado ao segundo número resulta em: ", (valor1 + valor2))
//resultado = 8
console.log("O primeiro número multiplicado pelo segundo número resulta em: ",(valor1*valor2))
//resultado = 15


