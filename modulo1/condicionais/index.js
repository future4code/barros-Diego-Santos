// ---- Exercícios de interpretação de código
// 1 - Leia o código abaixo:
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// a) Explique o que o código faz. Qual o teste que ele realiza?
  // ele verifica qual o resto da divisao, se ele sera igual a 0.

// b) Para que tipos de números ele imprime no console "Passou no teste"?  
  // para todos os numeros divididos por 2, ou seja numeros pares.

// c) Para que tipos de números a mensagem é "Não passou no teste"? 
  // para todos numeros inpar que o usuario digitar, que tenha, resto 1.
*/   






// 2 - O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar
  // algumas tarefas de um supermercado:
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)  

// a) Para que serve o código acima?
  // para informar ao cliente o preço da fruta que ele digitar.

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?  
  // O preço da fruta maça é  R$2.25.

// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem 
// impressa no console se retirássemos o break que está logo acima do default (o 
// break indicado pelo comentário "BREAK PARA O ITEM c.")?  
  // se retirar o break,  ira execultar o codigo ate o break abaixo do default dando o
  //   valor errado, o valor de default 
*/









// 3 - Leia o código abaixo:
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a) O que a primeira linha está fazendo? 
  // se for a linha do if, esta verificando se o numero que o usuario inserio é maior que 0

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal?
// E se fosse o número -10?  
  // se digitar 10 vai aparecer "Esse número passou no teste", e se for -10 não aparecera nada
  // porque nao foi definido para aparecer, ele so guardara o -10 na variavel numero  

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
  // dara o erro de referencia,  mensagem is not defined, ja que a variavel "mensagem",
  // está dentro do if e não no escopo global para ser chamada por fora  
*/












//---------- ------- Exercícios de escrita de código ----- ------------------- 
/*
// 1- Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se
// ele/ela pode dirigir (apenas maiores de idade). 

// a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
const pessoaIdade = prompt("Digite sua idade: ")

// b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
const anosFaltam = 18 - Number(pessoaIdade)
function verificarIdade(valor){
    if(valor >= 18){
        console.log("Você pode dirigir")
    }else {
        console.log(`Ainda falta ${anosFaltam} ano, Você não pode dirigir.`)
    }
    
}

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não 
// pode dirigir."
verificarIdade(pessoaIdade)
*/






/*
// 2- Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para 
// digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a 
// mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

function turnoDia(){
    let digiteTurno = prompt((`Fale em qual turno você estuda: Digite M (Matutino)
    ou V (Vespertino) ou N (Noturno).`))
    if(digiteTurno === "M" || digiteTurno === "Matutino"){
        console.log("Bom Dia");
    }else if(digiteTurno === "V" || digiteTurno === "Vespertino" ){
        console.log("Boa tarde")
    }else if(digiteTurno === "N" || digiteTurno === "Noturno" ){
        console.log("Boa noite")
    }
}
turnoDia() // usei operadores ai so pra ir praticaando 
*/









/*
// 3- Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

function turnoDia(){
    let digiteTurno = prompt((`Fale em qual turno você estuda: Digite M (Matutino)
    ou V (Vespertino) ou N (Noturno): Digite apenas a inicial`))
    switch (digiteTurno){
    case "M" :
        console.log("Bom Dia");
        break
    case "V" :
        console.log("Boa tarde")
        break
    case "N" :
        console.log("Boa noite")
        break
    default:
        console.log("atualize a pagina e digite apenas a inicial ")
        break   
    }
} // tentei usar o  operador || ( ou ) aqui no switch mas nao funcionou da forma que queria
turnoDia()
*/










/*
// 4- Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só 
// assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo
// de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão
// assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou
// amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom
// filme!", caso contrário, imprima "Escolha outro filme :("

const generoFilme = prompt("Qual o gênero do filme que deseja assitir? ")
const valorIngresso = Number(prompt("Qual o valor do ingresso? "))

const amigoAssistir = () => {
    if(generoFilme === "fantasia" && valorIngresso <= 15){
        console.log("Bom filme! ")
    } else {
        console.log("Escolha outro filme :( ")
    }
}
amigoAssistir() 
*/












// ----------- ------ desafio ---------- ---------------- 

/*
// 1- Modifique o código do exercício 4 de escrita de código para, antes de imprimir a 
// mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai 
// comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!"
// e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

const generoFilme = prompt("Qual o gênero do filme que deseja assitir? ")
const valorIngresso = Number(prompt("Qual o valor do ingresso? "))
//const lanche = prompt("Qual lanche você ira comprar? ")

const amigoAssistir = () => {
    // fiz das duas formas caso vá usar essa primeira, tem que tirar o coment da const acima
    // o da segunda forma e melhor porque ele so ira perguntar o lanche se o o if de verdadeiro
    //if(generoFilme === "fantasia" && valorIngresso <= 15){
    //    console.log(`Bom filme!
    //   Aproveite o seu lanchinho ( ${lanche} )` )
    if(generoFilme === "fantasia" && valorIngresso <= 15){
        const lanche = prompt("Qual o lanche você ira comprar? ")
        console.log("Bom filme! ") 
        console.log(`Aproveite o seu lanche ${lanche}`)
    } else {
        console.log("Escolha outro filme :( ")
    }
}
amigoAssistir()
*/






// 2- Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio 
// e futebol. Para esta compra, o usuário deve fornecer algumas informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos
// O seu sistema deve solicitar estas informações ao usuário, através do prompt . Além disso, 
// ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o
// usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
// Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa.
// Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus 
// preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10

/*
const nomeCliente = prompt("Digite seu nome completo! ")
const tipoJogo = prompt(`Por favor, digitar as iniciais em maisculo como representado:
- Qual o tipo de jogo?
- IN indica internacional;
- DO indica doméstico; `)
const etapaJogo = prompt(`Por favor, digitar as iniciais em maisculo como representado:
- Qual a etapa do jogo ?
- SF indica semi-final;
- DT indica decisão de terceiro lugar;
- FI indica final `)
const categoria = Number(prompt(`Digite apenas numero: 
Qual a categoria que você dejesa 1, 2, 3 ou 4;`))
const quantiaIngresso = Number(prompt("Quantos ingressos você vai querer?"))

const valorIngressoSF = {
    cat1: 1320,
    cat2: 880,
    cat3: 550,
    cat4: 220
} 
const valorIngressoDT = {
    cat1: 660,
    cat2: 440,
    cat3: 330,
    cat4: 170
}
const valorIngressoFI = {
    cat1: 1980,
    cat2: 1320,
    cat3: 880,
    cat4: 330
}

function jogo() {
    if (tipoJogo === "DO"){
        if (etapaJogo === "SF" && categoria === 1){       
        let multiplicar = quantiaIngresso * valorIngressoSF.cat1 
        return multiplicar
        }else if (etapaJogo === "SF" && categoria === 2){
            multiplicar = quantiaIngresso * valorIngressoSF.cat2 
            return multiplicar
        }else if (etapaJogo === "SF" && categoria === 3){
            multiplicar = quantiaIngresso * valorIngressoSF.cat3 
            return multiplicar
        }else if (etapaJogo === "SF" && categoria === 4){
            multiplicar = quantiaIngresso * valorIngressoSF.cat4 
            return multiplicar
        }
        // aqui ja entra outra linha 
        if (etapaJogo === "DT" && categoria === 1){
            multiplicar = quantiaIngresso * valorIngressoDT.cat1
            return multiplicar
        }else if (etapaJogo === "DT" && categoria === 2){
            multiplicar = quantiaIngresso * valorIngressoDT.cat2
            return multiplicar
        }else if (etapaJogo === "DT" && categoria === 3){
            multiplicar = quantiaIngresso * valorIngressoDT.cat3
            return multiplicar
        }else if (etapaJogo === "DT" && categoria === 4){
            multiplicar = quantiaIngresso * valorIngressoDT.cat4
            return multiplicar
        }
        // outra linha de novo
        if (etapaJogo === "FI" && categoria === 1){
            multiplicar = quantiaIngresso * valorIngressoFI.cat1
            return multiplicar
        }else if (etapaJogo === "FI" && categoria === 2){
            multiplicar = quantiaIngresso * valorIngressoFI.cat2
            return multiplicar
        }else if (etapaJogo === "FI" && categoria === 3){
            multiplicar = quantiaIngresso * valorIngressoFI.cat3
            return multiplicar
        }else if (etapaJogo === "FI" && categoria === 4){
            multiplicar = quantiaIngresso * valorIngressoFI.cat4
            return multiplicar
        }
    }
    if (tipoJogo === "IN"){
        if (etapaJogo === "SF" && categoria === 1){       
           multiplicar = quantiaIngresso * valorIngressoSF.cat1 * 4.10
        return multiplicar
        }else if (etapaJogo === "SF" && categoria === 2){
            multiplicar = quantiaIngresso * valorIngressoSF.cat2 * 4.10
            return multiplicar
        }else if (etapaJogo === "SF" && categoria === 3){
            multiplicar = quantiaIngresso * valorIngressoSF.cat3  * 4.10
            return multiplicar
        }else if (etapaJogo === "SF" && categoria === 4){
            multiplicar = quantiaIngresso * valorIngressoSF.cat4  * 4.10
            return multiplicar
        }

        if (etapaJogo === "DT" && categoria === 1){
            multiplicar = quantiaIngresso * valorIngressoDT.cat1  * 4.10
            return multiplicar
        }else if (etapaJogo === "DT" && categoria === 2){
            multiplicar = quantiaIngresso * valorIngressoDT.cat2 * 4.10
            return multiplicar
        }else if (etapaJogo === "DT" && categoria === 3){
            multiplicar = quantiaIngresso * valorIngressoDT.cat3  * 4.10
            return multiplicar
        }else if (etapaJogo === "DT" && categoria === 4){
            multiplicar = quantiaIngresso * valorIngressoDT.cat4  * 4.10
            return multiplicar
        }
        
        if (etapaJogo === "FI" && categoria === 1){
            multiplicar = quantiaIngresso * valorIngressoFI.cat1  * 4.10
            return multiplicar
        }else if (etapaJogo === "FI" && categoria === 2){
            multiplicar = quantiaIngresso * valorIngressoFI.cat2  * 4.10
            return multiplicar
        }else if (etapaJogo === "FI" && categoria === 3){
            multiplicar = quantiaIngresso * valorIngressoFI.cat3  * 4.10
            return multiplicar
        }else if (etapaJogo === "FI" && categoria === 4){
            multiplicar = quantiaIngresso * valorIngressoFI.cat4  * 4.10
            return multiplicar
        }
    }
}

// esse codigo abaixo, troca oque o usuario escrever DO ou IN para Nacional ou Internacional
// fiz isso so para ficar parecido com o exemplo
const nomeJogo = () => {
    if(tipoJogo === "DO"){
    return "Jogo Nacional (DO)"
    } else if (tipoJogo === "IN"){
        return "Jogo Internacional (IN)"
    }
}

// ja esse codigo, troca a etapa do jogo, basicamente a mesma coisa do de cima trocando outros valores
const alterarEtapa = () => {
    if(etapaJogo === "SF"){
        return "Semi-finais"
    }else if(etapaJogo === "DT"){
        return "Decisão de terceiro lugar"
    }else if(etapaJogo === "FI"){
        return "Final"
    }
}


// esse codigo aqui é para determinar o valor unitario dos ingressos
function ingresoUnidade() {
    if (tipoJogo === "DO" || tipoJogo === "IN"){
        if (etapaJogo === "SF" && categoria === 1){       
        return valorIngressoSF.cat1 
        } else if (etapaJogo === "SF" && categoria === 2){       
            return valorIngressoSF.cat2
        } else if (etapaJogo === "SF" && categoria === 3){       
            return valorIngressoSF.cat3
        } else if (etapaJogo === "SF" && categoria === 4){       
            return valorIngressoSF.cat4
        }
        // separando
        else if (etapaJogo === "DT" && categoria === 1){       
            return valorIngressoDT.cat1
        } else if (etapaJogo === "DT" && categoria === 2){       
            return valorIngressoDT.cat2
        } else if (etapaJogo === "DT" && categoria === 3){       
            return valorIngressoDT.cat3
        } else if (etapaJogo === "DT" && categoria === 4){       
            return valorIngressoDT.cat4
        }
        // separando
        else if (etapaJogo === "FI" && categoria === 1){       
            return valorIngressoFI.cat1
        } else if (etapaJogo === "FI" && categoria === 2){       
            return valorIngressoFI.cat2
        } else if (etapaJogo === "FI" && categoria === 3){       
            return valorIngressoFI.cat3
        } else if (etapaJogo === "FI" && categoria === 4){       
            return valorIngressoFI.cat4
        }
    }
}   


console.log(`---Dados da compra--- 
Nome do cliente: ${nomeCliente} 
Tipo do jogo: ${nomeJogo()} 
Etapa do jogo: ${alterarEtapa()}
Categoria: ${categoria} 
Quantidade de Ingressos: ${quantiaIngresso} 

---Valores--- 
Valor do ingresso: R$ ${ingresoUnidade()}
Valor total: R$ ${jogo()}`)
*/

//  PS: provavelmente fiz algumas coisas desnecessarias entao desde já, peço desculpas pelo
// codigo bagunçado ,e grande , mas eu queria testar o quanto eu tava entendo sobre o assunto.
