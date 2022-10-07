//exercicio 1 Cadastro de cliente //
const clients = [
  {id: 1, name: "Fulano"},
  {id: 2, name: "Ciclano"},
  {id: 3, name: "Beltrano"},
  {id: 4, name: "Fulana"}
]
const newClient = (id,name) => {
  let client = clients.find( client => client.id === id) // faz a verificaçao se aquele id já existe e me retorna o objeto em sí //
  const regex = /\W|_/; // faz a verificação se existe algum caractere //
  if(client && client.id === id) {
    return  `Erro. Parâmetro inválido (id "${id}" já existe).`
  } else if (typeof name !== "string" || regex.test(name)){
    return "Por favor. Digite um nome válido!"
  } else if (client === undefined) {
    clients.push({id: Number(id), name: name})
    return clients
  }
}
console.log("Exercicio 1: Cadastro de cliente")
console.log(newClient("5","batata"))




// exercicio 2 Geração de tabuada //
const creatTabuada = (quantity) => {
  if(typeof quantity !== "number"){
    return console.log(`Erro. Parâmetro inválido ('Digite um número')`)
  }else if (quantity > 10 || quantity < 1) {
    return console.log(`Erro. Parâmetro inválido ('número precisa valer entre 1 e 10')`)
  } else {
    for(let i = 0; i <= quantity; i++){
      console.log(quantity * i)
    }
  }
}
console.log("Exercicio 2: Gerar uma tabuada")
creatTabuada(8)
