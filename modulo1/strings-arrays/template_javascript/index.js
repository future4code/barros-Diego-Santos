//Exercícios de interpretação de código
// 1 Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
/*
let array
console.log('a. ', array) 
// vai aparecer como indefinido ja que nao foi atribuido nenhum valor,
// " a. undefined"

array = null
console.log('b. ', array) 
// vai aparecer como nulo, "b. null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) 
// vai mostrar a quantidade de elementos dentro do array "c. 10"

let i = 0
console.log('d. ', array[i]) 
// vai mostrar o elemento 0 ou seja o primeiro elemento do array "d. 3"

array[i+1] = 19
console.log('e. ', array)
// ira alterar o elemto 1(segundo elemento do array), que era 4 e vai virar "e. 19"

const valor = array[i+6]
console.log('f. ', valor)
// mostrara o  elemento 6 apartir do 0, "f. 10"
*/

//Leia o código abaixo com atenção 
/* 
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// o .toUpperCase() murada todas as letras para maiusculas, 
// o .replaceAll vai mudar todas as letras A por I 
// e o length mostrar a quantidade de strings

//Qual será o valor impresso no console
//se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//RESPOSTA  "SUBI NUM ÔNIBUS EM MIRROCOS" 
//  27 caracteres (espaços tambem contam no length)
*/



       // ----  ----             -----     -----
// Exercícios de escrita de código
/*
// 1 - Faça um programa que pergunte ao usuário seu nome e
// seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
let nome = prompt("Digite seu nome! ");
let email = prompt("Digite seu email! ");

let usuario = 
`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o),${nome}!`;
console.log(usuario);
*/


/*
// 2 - Faça um programa que contenha um array com 5 das suas comidas preferidas,

// armazenado em uma variável. Em seguida, siga os passos:
let comidas = ["Lasanha","feijoada","pudim","bolo","carne"]; 

// a) Imprima no console o array completo
console.log(comidas);

// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas:,
//seguida por cada uma das comidas, uma embaixo da outra.
let ordem = 
`Essas são as minhas comidas preferidas: 
${comidas[0]}.
${comidas[1]}.
${comidas[2]}.
${comidas[3]}.
${comidas[4]}.`;
console.log(ordem);

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
//Troque a segunda comida da sua lista pela inserida pelo usuário. 
//Imprima no consolea nova lista
let addComida = prompt("Qual sua comida favorita? ");
comidas[1] = addComida;
console.log(comidas);
*/


// 3 - Faça um programa, seguindo os passos:
/*
// a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
let listaDeTarefas;

// b) Pergunte ao usuário 3 tarefas que ele precise 
// realizar no dia e armazene-as, uma por uma, no array
let i1 = prompt("Digite uma tarefa que precise realizar! ");
let i2 = prompt("Digite uma segunda tarefa que precise realizar! ");
let i3 = prompt("Digite uma terceira tarefa que precise realizar! ");

// c) Imprima o array no console
listaDeTarefas = [i1,i2,i3];
console.log(listaDeTarefas);

// d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
let i = prompt("Digite o índice de uma tarefa ja realizada de  1, 2 ou 3! ")

// e) Remova da lista o item de índice que o usuário escolheu. 
listaDeTarefas.splice(i-1,1);

// f) Imprima o array no console
console.log("nova lista " + listaDeTarefas);
*/




// ---- Desafio -- - 
/*
// 1 - Receba uma frase e retorne um array onde cada elemento é uma das 
//palavras da frase, ignorando os espaços

let frase = prompt("Digite uma frase");
console.log(frase.split(" "));
*/

//2 - Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa
//que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
/*
let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
let posicao = array.indexOf("Abacaxi")

console.log("A índice de abacaxi é " + posicao + " e o tamanho do array é " + array.length )
*/