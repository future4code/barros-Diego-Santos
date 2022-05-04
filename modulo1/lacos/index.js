//--------   Exercícios de interpretação de código -----

// 1- O que o código abaixo está fazendo? Qual o resultado impresso no console?

/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// Respostas:  esta fazendo uma contagem, enquanto ( i ) for menor que 5 ele
 // ira repetir o ciclo ate chegar em 4, e ir somando a variavel ( valor ) com 
  // o resultado de ( i ) que resultara em 10


*/



// 2- Leia o código abaixo:

/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// a) O que vai ser impresso no console?
 // vai imprimir os numeros maiores que 18, ou seja 19 21 23 25 27 30

// b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é  
 // suficiente? Se sim, o que poderia ser usado para fazer isso?
  // Resposta: O for...of sozinho nao é suficiente, teria que usar o
   // indexof() ou o entries() tambem .  // ps:achei confusa essa pergunta 

for (let numero of lista.entries()) {
    //numero = lista.indexOf(numero)
    console.log(numero)
}
*/




// 3- Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// resposta: iria adicionar a linha um asterisco a cada console se o usuario digitar 4 vai ser
  // impresso 4 console e cada console acrescentara 1 asterisco

*/















//-     - - - - -- - -- Exercícios de escrita de código --------- - - - - - 

// 1- Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um
 // por um, e guarde esses nomes em um array.

// c) Por fim, imprima o array com os nomes dos bichinhos no console

/*
function bixosEstimacao() {
    const quantidade = Number(prompt("Quantos bichinhos de estimação você tem? "))
    const nomesPet = []
    if(quantidade === 0 ){
        console.log("Que pena! Você pode adotar um pet! ")
    } else if (quantidade > 0 ){
        let repeticoes =  0
        while(repeticoes < quantidade){
            nomesPet.push(prompt("Quais os nomes deles"))
            repeticoes ++
        }
     console.log(nomesPet)   
    }
}
bixosEstimacao()

*/






// 2- Considere que você tenha acesso a um array  (chamado de 'array original') que é 
 // composto somente de números. Baseando-se nisso, crie uma função para cada um dos
  // itens abaixo, realizando as operações pedidas:

// a) Escreva um programa que imprime cada um dos valores do array original.
console.log("exercicio 2 - A) ")
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]  

for(let cadaNumero = 0; cadaNumero < array.length; cadaNumero++){
    const elementos = array[cadaNumero]
    console.log(elementos)
}


// b) Escreva um programa que imprime cada um dos valores do array original divididos por 10.
console.log("exercicio 2 - B) ")
for(let cadaNumero = 0; cadaNumero < array.length; cadaNumero++){
    const elementos = array[cadaNumero] / 10
    console.log(elementos)
}



// c) Escreva um programa que crie um novo array contendo, somente, os números pares
 // do array original e imprima esse novo array.
console.log("exercicio 2 - C) ")
let numeroPar = []
for(let numero  of array){
    if( numero % 2 === 0 ){
        numeroPar.push(numero)
    } 
}
console.log(numeroPar)




// d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: 
 // "O elemento do índex i é: numero". Depois, imprima este novo array.
console.log("exercicio 2 - d")

let arrayString = []
for(let repetir = 0; repetir < array.length; repetir++){
    arrayString.push(`O elemento do índex ${repetir} é ${array[repetir]}`)
}
console.log(arrayString)





// e) Escreva um programa que imprima no console o maior e o menor números contidos
 // no array original
console.log("exercicio 2 - e ")


function maiorMenorNumero() {
    let numeroMaior = 0
    let numeroMenor = Number.POSITIVE_INFINITY
    for(let maior= 0; maior < array.length; maior++) {
        let numero = array[maior]
        if(numero > numeroMaior) {
            numeroMaior = numero
        }
    }
    for(let menor = 0; menor < array.length; menor++) {
        let menorNumero = array[menor]
        if(menorNumero < numeroMenor) {
            numeroMenor = menorNumero
        }
    }

    return `O maior número é ${numeroMaior} e o menor é ${numeroMenor} `
}
console.log(maiorMenorNumero())

