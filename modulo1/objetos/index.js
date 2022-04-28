// --- Exercícios de interpretação de código
// 1 -  Leia o código abaixo
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) 
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?
 // o primeiro console mostrara, Matheus Nachtergaele
  // o segundo mostrara, o ultimo indice do array,  Virginia Cavandish
   // e o terceiro ira mostrar, canal: "Globo", horario: "14h"
*/

// 2 - Leia o código abaixo
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?
 // 1 cachorro = nome:"Juca", idade: 3 , raca: "SRD".
  // 2 gato = nome:"Juba", idade: 3 , raca: "SRD".
   // 3 tartaruga = nome:"Jubo", idade: 3 , raca: "SRD".

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
 //  o SPREAD pode copiar um objeto para outro objeto e altarar esse segundo objeto
  // sem mexer com o primeiro, tambem pode ser ultilizado com funções de matematica
   // PS: desculpa se nao expliquei bem aqui: mas foi a forma que vei a minha cabeça!
*/

// 3 - Leia o código abaixo
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
// a) O que vai ser impresso no console?
 // 1 false
 // 2 retorna undefined , esse eu olhei no console

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
 // aconteceu pq o valor altura nao existia ainda, ai  foi criado a chave "altura" , mas 
  // como nao foi colocado nenhum valor ele deu undefined 
*/




// ----------- exercícios de escrita de código --------


/*
// 1 - Resolva os passos a seguir:
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos
 // (um array que sempre terá exatamente três apelidos). Depois, escreva uma função
  // que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

const pessoa = {
    nome: "Diego",
    apelidos: [ "Di","Didi", "Dego" ]
};

function podeMeChamar(objeto){
    return `Eu sou ${pessoa.nome}, mas pode me chamar de: 
    ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`
}
console.log(podeMeChamar(pessoa))

//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor
 // da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame
  // a função feita no item anterior passando como argumento o novo objeto

const novosApelidos = {
    ...pessoa,
    apelidos: ["feijao", "arroz", "batata"] 
    // nao sou muito criativo por isso os nomes de comidas:
}   
console.log(podeMeChamar(novosApelidos))
*/










// 2 - Resolva os passos a seguir:

/*
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
const pessoa1 = {
    nome: "Moises",
    idade: 23,
    profissao: "Pedreiro"
}

const pessoa2 = {
    nome: "Fernanda",
    idade: 31,
    profissao: "Advogada"
}


// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    // 1 - O valor de nome
    // 2 - O numero de caracteres do valor nome
    // 3 - O valor de idade
    // 4 - O valor de profissão
    // 5 - O numero de caracteres do valor profissão

function arrayPessoas(valor) {
    const conteudo = []
    conteudo.push(valor.nome)
    conteudo.push(valor.nome.length)
    conteudo.push(valor.idade)
    conteudo.push(valor.profissao)
    conteudo.push(valor.profissao.length)
    
    return conteudo
}
console.log(arrayPessoas(pessoa1))
console.log(arrayPessoas(pessoa2))
*/









// 3 - Resolva os passos a seguir:


/*
// a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

const carrinho = [];


// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as 
 //seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

const sacolao1 = {
    nome:"maça",
    disponibilidade: true
}
const sacolao2 = {
    nome:"banana",
    disponibilidade: true
}
const sacolao3 = {
    nome: "manga",
    disponibilidade: false
}



// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do
 // array de carrinho. Invoque essa função passando os três objetos criados.  
function compra(fruta,carrinho) {
    carrinho.push(fruta)
}
compra(sacolao1,carrinho)
compra(sacolao2,carrinho)
compra(sacolao3,carrinho)

// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido 
 // com três objetos. 
console.log(carrinho)
*/












// ---------------    ----  Desafios ----   ----------------

// 1 - Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois 
 //imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, 
  //imprima também o tipo dele para garantir que é um objeto.

/*  
function infoUsuario() {
    const receberNome = prompt("Digite seu nome! ")
    const receberIdade = prompt("Digite sua idade! ")
    const receberProfissao = prompt("Digite sua porfissão") 
    const todasInfo = {
        nome: receberNome,
        idade: receberIdade,
        profissao: receberProfissao
    }
    return todasInfo
} 
console.log(infoUsuario())
*/



// 2 - Crie uma função que receba dois objetos que representam filmes. Eles devem ter as 
 // propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
    // O primeiro filme foi lançado antes do segundo? false
    // O primeiro filme foi lançado no mesmo ano do segundo? true

/*    
const filme1 = {
    nome: "A Volta dos que não Foram",
    ano: 2008
}    

const filme2 = {
    nome: "O Grande Mentiroso",
    ano: 2002
}

function anoFilme(obj1,obj2) {
    const lancadoAntes = obj1 <= obj2 ;
    const lancadoMesmoAno = obj1 === obj2 ;
    console.log(`O primeiro filme foi lançado antes do segundo? ${lancadoAntes} `)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${lancadoMesmoAno}`)
}

anoFilme(filme1.ano,filme2.ano)
*/


// 3 - Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o 
 //controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar
  //esse mesmo objeto com a propriedade disponibilidade com o valor invertido.

/*
const carrinho = [];

const sacolao1 = {
    nome:"maça",
    disponibilidade: true
}
const sacolao2 = {
    nome:"banana",
    disponibilidade: true
}
const sacolao3 = {
    nome: "manga",
    disponibilidade: false
}

  
function compra(fruta,carrinho) {
    carrinho.push(fruta)
}
compra(sacolao1,carrinho)
compra(sacolao2,carrinho)
compra(sacolao3,carrinho)

console.log(carrinho)
console.log("acima esta antes de alterar e abaixo depois")
function verEstoque(estoque1,estoque2,estoque3) {
    estoque1 = {
        ...sacolao1,
        disponibilidade: !sacolao1.disponibilidade
    }
    estoque2 = {
        ...sacolao2,
        disponibilidade: !sacolao2.disponibilidade
    }
    estoque3 = {
        ...sacolao3,
        disponibilidade: !sacolao3.disponibilidade
    }
    console.log(estoque1) // aqui eu deixei das duas formar porque achei mais legal assim
    console.log(estoque2)
    console.log(estoque3)
    console.log(estoque1.disponibilidade,estoque2.disponibilidade,estoque3.disponibilidade)
    // caso queiram testar se ta funcionando e so alterar o valor da
    // const sacolao1, sacolao2,sacolao3 acima e ver que ta funciiando apesar que no
    // no console ja vai imprimir ela antes e depois de alterar
}

verEstoque()
*/