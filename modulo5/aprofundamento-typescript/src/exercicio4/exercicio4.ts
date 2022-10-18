// a) Crie um arquivo chamado exercicio-4.ts , cole o código abaixo e use 
 // comentários para responder as questões.

// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse 
 //arquivo typescript em um arquivo javascript?
// Resposta: primeiro eu teria que transpilar ele no terminal com o comando tsc exercicio-4.ts
 // e depois executar com node exercicio-4.js

// c) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria 
 // diferente? Se sim, descreva as diferenças. 
// Resposta: so teria que mudar o diretorio dessa forma: tsc ./src/exercicio-4.ts,
 // de executar com o node ./src/exercicio-4.js

// d) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso 
 //conheça, explique como fazer.
// Resposta: nao conhecia nenhum ate ver as dicas, podemos usar o tsc aquivo1 arquivo2 arquivo3, 
 // para assim transpilar varios arquivos de uma vez;
 // ou somento o comendo tsc na pasta para transpilar todos os arquivos com a extensao .ts

console.log("exercicio4")