### OBS: Utilizei o codigo que fiz na aula junto com o rodrigo, entao as coisas ja estavam feita mas por mim msm.
### OBS: Pretendo ultilizar os metodos de criptografia no projeto em andamento

# Exercicio 1


## a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
### RESPOSTA: rounds sao a quantidade de camadas que o salt usa para criptografar, ultilizei o valor 12, porque o professor disse que é o mais comum usado pra aplicacoes simples, fora que maior que isso iria aumentar a demora de resposta do codigo!


## b) Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  
### FEITO!

## c) Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs
### FEITO!


# Exercicio 2

## a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
### RESPOSTA: o metodo de criar, porque se for feito primeiro no login e nao tiver uma senha criptografada no banco, vai retornar como uma senha errada

## b) Faça a alteração do primeiro endpoint
### FEITO!

## c) Faça a alteração do segundo endpoint
### FEITO!

## d) No exercício da aula anterior, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.
### RESPOSTA: Não, porque nesse endpoint ja estamos logandos, ou seja essa verificacao de criptografia ja foi feita no endpoint login que nos retorna um token e ai sim ultilizamos esse endponst de user/profile
