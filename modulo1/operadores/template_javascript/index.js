// Exercícios de interpretação de código

 //exercicio 1
/* 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // =false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // =false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // =true

console.log("d. ", typeof resultado) // = booleano
*/


//exerciocio 2
/* 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero 
  //esta concatenando em vez de somar os numeros:

console.log(soma)
  //resultado é uma junçao dos valores em vez de somar 
*/


//exercicio 3 - sugerindo solução para o colega
/*  
let primeiroNumero = Number(prompt("Digite um numero!"))   
let segundoNumero = Number(prompt("Digite outro numero!"))

let soma = primeiroNumero + segundoNumero
  //achei melhor trocar o const pelo let para que depois possa ser alterada essa soma!
console.log(soma)
*/


//Exercícios de escrita de código

//exercicio - 1
/*
alert("Por favor dígite apenas numeros!");
let suaIdade = Number(prompt("Qual a sua idade? "));
let idadeAmigo = Number(prompt("Digite a idade do seu melhor amigo!"));

let maiorQue = (suaIdade) > (idadeAmigo);
console.log(`Sua idade é maior do que a do seu melhor amigo? ${maiorQue}`);

let diferencia = (idadeAmigo) - (suaIdade);
console.log(`A diferencia de idade é ${diferencia}`);
*/


//exercicio - 2
/*
let insiraNumPar = Number(prompt("Insira um número Par! "));
let restoDivisao = (insiraNumPar) % 2;

console.log(restoDivisao);
  // testei com varios números par e todos deram resto 0
  // e quando é escrito um numero ímpar sempre resta  1
*/


//exercicio - 3
/*
let idadeAno = Number(prompt("Qual sua idade em anos "))

console.log(idadeAno);
let idadeMes = 12 * (idadeAno);
let idadeDias = 365 * (idadeAno);
let idadeHoras = 24 * 365 * (idadeAno);

console.log (`Você tem ${idadeMes} meses de idade, 
${idadeDias} em dias,
 ${idadeHoras} em horas`);
*/


//exercicio - 4
/*
let numOne = Number(prompt("Digite um numero! "))
let numTwo = Number(prompt("Digite outro numero! "))

let maiorQue = (numOne) > (numTwo)
let igualQue = (numOne) === (numTwo)
let divisivelPor1 = (numOne) % (numTwo) === 0 
  //esse aqui tive que pedir ajuda a um amigo,mas ele nao me deu o codigo
  //tava tentando usar a  / de divisao, mas todo numero que colocasse dava false      
let divisivelPor2 = (numTwo) % (numOne) === 0

console.log(`O primeiro numer é maior que o segundo? ${maiorQue}`)
console.log(`O primeiro numero é divisível pelo segundo? ${divisivelPor1}`)
console.log(`O primeiro numero é igual ao segundo? ${igualQue}`)
console.log(`O segundo numero é divisível pelo primeiro? ${divisivelPor2}`)
*/



// --- Desafio opcional----
//parte --- 1 ---
// como nao sei nada sobre temperaturas vou fazer uma pequena pesquisa sobre e 
// alguns pequenos comentarios aqui
// simbologia das temperaturas (°C)=Grau Celsiu, (F)=Fahrenheit, (K)=Kelvin
// conversao das temperaturas
// celcius para fahrenheit (°C x 9)/5)+32 ou seja.
// Fahrenheit para Celsius: (°F – 32) x 5) / 9
// 0(°C) grau celsiu equivale a 32 fahrenheit e 
// depois o fahrenheit sobe 1,8(f) a cada 1(°C) graus celsiu ex: 1(°C) = 33.8(F)
// 0(°C) grau celsiu equivale a 273,15(K) e sobe 10(K) a cada 10(°C)
// 1(°C)grau celsiu = 1(K) grau kelvin + 273,15.
/*
let fahrenheit = Number(32);
let Kelvin = Number(273.15);
let celcius = Number(0);

 // a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
let resultado = (77 - fahrenheit )* (5/9) + Kelvin;
console.log(`77°F em kelvin é,${resultado}°K`);

 // b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
celcius = 80 ;
resultado = celcius * (9/5) + fahrenheit;
console.log(`80°C em Fahrenheit é,${resultado}`);

 // c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
celcius = 30;
resultado = celcius * (9/5) + fahrenheit;

let resultadoDois = celcius + Kelvin;
console.log(`30°C em fahrenheit é,${resultado}°F, e em Kelvin é,${resultadoDois}`);

 // d)  Altere o último item para que o usuário insira
 // o valor em graus Celsius que ele deseja converter
celcius = Number(prompt("Insira o valor em Graus Celsius! "))

resultado = celcius * (9/5) + fahrenheit;
resultadoDois = celcius + Kelvin; 

console.log(`${celcius}°C em fahrenheit é,${resultado}°F, e em Kelvin é,${resultadoDois}`);
 // esse primeiro desafio eu gostei demais aprendi uma coisa
 //nova que é a conversao de temperaturas.
*/

//parte --- 2 ---
/*
let quiloWaHora = 0.05;
let quiloWattGasto = Number(prompt("Digite o valor do Quilowatt! "));

let valorQuePaga = quiloWattGasto * quiloWaHora;
console.log(`O valor ${valorQuePaga}`); //280 quilowatt, paga é 14,00

let desconto = 15;
let novoValor = valorQuePaga * desconto / 100;
let valorFinal = (valorQuePaga) - (novoValor);

console.log(valorFinal); //280 quilowatt com 15% desconto vai para 11.9
*/

//parte --- 3 ---
/*
//a) Procure uma forma de converter libra (lb) para quilograma (kg) 
// e escreva um programa que converta 20lb para kg. Imprima  a resposta
// no console da seguinte forma: 
let libra = 1;
let kg = 0.4535;
let conversor = libra * kg * 20;
console.log(`20lb equivalem a ${conversor}kg`);

//b) Procure uma forma de converter onça (oz) para quilograma (kg) 
//e escreva um programa que converta 10.5oz para kg. Imprima  a resposta
// no console da seguinte forma: 
let oz = 1;
kg = 0.02834;
conversor = oz * kg * 10.5;
console.log(`10.5oz equivalem a ${conversor}`);

//c) Procure uma forma de converter milha (mi) para metro (m) e escreva
// um programa que converta 100mi para m. Imprima  a  resposta no console da seguinte forma:
let milha = 1;
let metro = 1609.34; 
conversor = milha * metro * 100;
console.log(`100mi equivalem a ${conversor}m`);

//d) Procure uma forma de converter pés (ft) para metro (m) e escreva
//um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
let pes = 1;
metro = 0.3048;
conversor = pes * metro * 50;
console.log(`50ft equivalem a ${conversor}m`);

//e) Procure uma forma de converter galão (gal) para litro (l) e escreva
//um programa que converta 103.56gal para litro. Imprima  a resposta no 
//console da seguinte forma: 
let galao = 1;
let litro = 3.78541;
conversor = galao * litro * 103.56;
console.log(`103.56gal equivalem a${conversor}l`);

//f) Procure uma forma de converter xícara (xic) para litro (l) e escreva
//um programa que converta 450xic para litro. Imprima  a resposta 
//no console da seguinte forma:
let xicara = 1;
let ml = 0.24;
litro = 1;

conversor =  ml * litro * xicara * 450; 
console.log(`450xic equivalem a ${conversor} litros`)

//g) Escolha ao menos um dos itens anteriores e modifique o programa
//para que ele peça ao usuário o valor da unidade original antes de converter
xicara = Number(prompt("digite quantas xicaras você quer converter em litros! "))
conversor = xicara * ml * litro;
console.log(`O valor convertido é ${conversor} litros`)
*/