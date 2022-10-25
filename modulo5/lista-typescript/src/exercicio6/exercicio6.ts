// Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de 
 // explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes.
//Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os 
 // débitos realizados pelo cliente. Exemplo:

type Contas = {
  cliente: string,
  saldoTotal: number,
  debitos: number[]
};

const contasClientes:Contas[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
];

const verificarEmprestimo = ( clientes:Contas[]) :Contas[] => {
  const saldoAtualizado:Contas[] = clientes.map( (cliente :Contas) => {
    let saldo:number = cliente.debitos.reduce( (acc :number, c :number) => acc + c, 0);
    
    return {cliente: cliente.cliente, saldoTotal: (cliente.saldoTotal - saldo),debitos: []}
  }).filter( (cliente:Contas) => {
    return cliente.saldoTotal < 0
  })

  return saldoAtualizado 
}
console.log(verificarEmprestimo(contasClientes))


