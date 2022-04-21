//---- Exercícios de interpretação de código
// 1 - Leia o código abaixo

/*
function minhaFuncao(variavel) {
	return variavel * 5
}

//a) O que vai ser impresso no console?
console.log(minhaFuncao(2)) 
// variavel recebe 2 e multiplica por 5, 2 * 5 = 10
console.log(minhaFuncao(10))
// variavel recebe 10 * 5 = 50
*/
//b) O que aconteceria se retirasse os dois console.log e 
// simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? 
// O que apareceria no console? 
   // Reposta B - não aconteceria nada no console, mas se nao tiver
   // nenhum erro nela ela seria executado sem aparecer nada no console.


// 2 - Leia o código abaixo:  

/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}
  
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
*/
// a. Explique o que essa função faz e qual é sua utilidade:

   // Resposta - a function outraFuncao ira colocar todas letras em minusculas do
   // testoDoUsuario e ira procurar a palavra "cenoura" no texto que o usuario escrever,
   // retornando um valor boleano true ou false , dependendo do resultado;

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
   // i.   Eu gosto de cenoura    // retorna o valor true
   // ii.  CENOURA é bom pra vista   // retorna o valor true
   // iii. Cenouras crescem na terra    // retorna o valor true 
 // quase que eu caía na pegadinha aquii, mas ai fui rever o codigo e vi que ele primeiro 
 // transforma todas letras em minusculas antes de procurar a palavra no includes que esta em minuscula.



// ------------ Exercícios de escrita de código ----------

// 1 - Escreva as funções explicadas abaixo:
// a) A função não deve receber nenhum parâmetro e deve
// imprimir uma mensagem falando algumas informações sobre você, como:
/*
function semParametro() {
   return "Eu sou Diego, tenho 23 anos, moro na Bahia e sou estudante.";
}
console.log(semParametro());
*/

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
// o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma
// string que unifique todas as informações da pessoa em uma só mensagem com o template:
/*
function comParametro(nome,idade,cidade,profissao) {
    nome = "diego";
    idade = Number(23);
    cidade = "Capim Grosso BA";
    profissao = "Vendedor";
    return `Eu sou ${nome},tenho ${idade} anos, moro em ${cidade}, sou ${profissao}.`;
}
console.log(comParametro());
*/


// 2 - Escreva as funções explicadas abaixo:
// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função,
// faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima
// no console o resultado.
/*
function somar(n1, n2) {
   let somando = n1 + n2;
   return somando;
}
console.log(somar(25,44));
*/

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro
// número é maior ou igual ao segundo.
/*
function boleanoIgual(num1, num2) {
   let result = num1 >= num2 ;
   return result;
}
console.log(boleanoIgual(25,26));
*/

//c) Escreva uma função que receba um número e devolva um booleano indicando se
// ele é par ou não.
/*
function par(numb1){
   let confirmacao = numb1 % 2 === 0;
   
   return confirmacao;
}
console.log(par(6));
*/

// d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o
// tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
/*
function mensagem(palavra) { 
    let emMinuscula = palavra.toUpperCase();
    let tamanho = palavra.length;
    let  resultado = `o tamanho de ${emMinuscula} é ${tamanho}`;
    return  resultado;
}
console.log(mensagem("AbaCaXi"))
*/

// 3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação
//  e divisão).Em seguida, peça para o usuário inserir dois números e chame essas 4 funções
// com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o
// resultado das operações:
/*
function conta(valor1,valor2) {
    valor1 = prompt("digite um numero: ")
    valor2 = prompt("digite outro numero: ")
    let somando = Number(valor1) + Number(valor2);
    let subtraindo = valor1 - valor2;
    let multiplicando = valor1 * valor2;
    let dividindo = valor1 / valor2;
    return `Números inseridos: ${valor1} e ${valor2}
    Soma: ${somando}
    Diferença: ${subtraindo}
    Mutiplicação: ${multiplicando}
    Divisão: ${dividindo}`;
}
console.log(conta());
*/



// ------------- 🏅  Desafios
/*
// 1 - Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais
// de uma vez ao longo do código através de invocações/chamadas. Então, funções podem
// chamar/invocar outras funções também. Sua tarefa é escrever duas funções

// a) Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro
let primeiraArrow = (texto) => {
   console.log(texto)
}

primeiraArrow("escrevendo aqui so para nao deixar em branco! ")

// b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum
// retorno. Faça a soma entre esses valores e chame a sua primeira função mandando este
// resultado da soma como entrada para imprimi-lo

let segundaArrow = (n1 , n2) => {
   primeiraArrow(n1 + n2) ;
}   

segundaArrow(25,50)



// 2 - Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando
// o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no
// console.

function pitagoras(cateto1, cateto2) {
   let cateto1Quad = Math.pow(cateto1, 2);
   let cateto2Quad = Math.pow(cateto2, 2);
   let soma = cateto1Quad + cateto2Quad 
   return  Math.pow(soma, 1/2)
} 

console.log(pitagoras(4,3))
*/