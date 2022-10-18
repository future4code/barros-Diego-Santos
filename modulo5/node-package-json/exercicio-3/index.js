console.log(" !!! -- Exercicio 3 -- !!! ")
// Crie uma aplicação Node que receba uma string representando uma tarefa. O programa 
//deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista
//de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, 
//exiba a lista atualizada.

let taskList = [
  "Estudar  React js","Estudar Node.js",
  "Visitar um psicólogo",
];
const task = process.argv[2];
const addNewTask = (newTask) => {
  taskList = [...taskList,newTask];
  return (
  console.log("Tarefa adicionada com sucesso!"),
  console.log("Tarefas: "), 
  console.table(taskList) )
}
addNewTask(task)


// OBS: Spbre o exercicio 4
// o exercicio 4 era pra particionar as atividades, 
//cada uma em sua devida pasta entao creio eu que ela ja esteja feita ...
