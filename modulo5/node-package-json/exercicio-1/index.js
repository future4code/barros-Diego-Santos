console.log("!!! -- Exercicio 1 -- !!!")

// a) Responda como comentário no seu código: como fazemos
// para acessar os parâmetros passados na linha de comando para o Node?
 //Resposta: atribuindo o process.argv a uma variavel...

//b) Crie um programa que receba seu nome e sua idade. Após 
//receber estes valores, imprima no console uma mensagem que
//siga a seguinte estrutura:

const name = process.argv[2];
const age = Number(process.argv[3]);

console.log(`Olá, ${name} ! Você tem ${age} anos`);

// c) Altere o programa acima para que mostre também a
//sua idade daqui a sete anos.
const futureAge = age + 7;
console.log(`Olá, ${name} ! Você te, ${age} anos. Em sete anos você terá ${futureAge}`);