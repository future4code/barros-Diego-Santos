-- TUDO AQUI È DO BLOCO 16 - EXERCICIO: Aula - Aprofundamento SQL
-- Comando abaixo para renomear uma tabela
-- RENAME TABLE nome_da_tablea_antiga TO nome_da_tablea_atual; 

SET SQL_SAFE_UPDATES=0;
-- COMANDO PARA DESATIVA O ERRO 1175 - SET SQL_SAFE_UPDATES=0;
-- PARA ATIVAR NOVAMENTE COLOCAR O NUMERO 1 NO LUGAR DO 0

-- Para adicionar um novo VALOR a tabela
-- COMANDO - ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

-- Para Remover Uma coluna de valores 
-- COMANDO - ALTER TABLE Actor DROP COLUMN salary;

-- Para Mudar Um valor como por exeplo a quantida de letra que cabe 
-- COMANDO - ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

-- alterando  a quantidade permitida de string nos generos
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

/* No MySQL, existe um operador que possibilita a atualização de dados de uma tabela, 
este comando é o UPDATE . A query abaixo muda o nome do ator com id 123 para Moacyr Franco: 
	
	Importante : A cláusula WHERE especifica quais registros devem ser atualizados. 
	Se você omitir a cláusula WHERE, todos os registros da tabela serão atualizados!
	Portanto, não esqueça de colocar o WHERE.
    
EX: UPDATE Actor SET name = "Moacyr Franco" WHERE id = "123"
*/

-- a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003;
UPDATE Actor  SET name = "Lombroso Silva", birth_date = "2000-01-01" WHERE id = "001";

/* b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. 
	Então, escreva outra query para voltar ao nome anterior.
*/ 
UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes" AND id = "004";
UPDATE Actor SET name = "Juliana Paes" WHERE id = "004";

/* d) Escreva uma query em que você tente atualizar um dado da tabela que não existe 
(com um id inválido, por exemplo). Teste, anote e explique o resultado.  
*/
UPDATE Actor SET 
	name = "Moacyr Franco", 
    birth_date = "2020-02-10",  
    salary = 600000, 
    gender = "male" 
WHERE id = "005";

/* Exercício 3
 Para finalizar o CRUD, vamos ver o D: DELETE. Esse operador permite deletar toda 
 uma linha de uma tabela, seria como apagar um elemento dela.
 Por exemplo, se quisermos apagar o ator com o nome Tony Ramos
 
 EX: DELETE FROM Actor WHERE name = "Tony Ramos"
 */
 
-- a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro
DELETE FROM Actor  WHERE name = "Fernanda Montenegro"; 
-- b) Escreva uma query que apague todos os atores (do gênero male) com o salári  maior do que R$1.000.000,00
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

/* Exercício 4
 O MySQL permite que façamos queries cujo resultado final é alguma manipulação 
 em relação aos dados salvos. Essa manipulação é dada através de uma função
 MySQL. O exemplo mais clássico é a função COUNT, que permite contar a
 quantidade de elementos. Por exemplo, se quisermos contar todos os atores, poderíamos fazer assim:
 
 EX: SELECT COUNT(*) FROM Actor
 Ou, então, poderíamos ver a quantidade de atrizes no nosso banco, colocando uma condição para entrar na contagem:
 EX: SELECT COUNT(*) FROM Actor WHERE gender = "female"
 
 Para encerrar os nossos exemplos, vamos falar da função AVG ("Average" - média em inglês) que permite calcular a
 média de alguma das colunas dos nossos dados. Por exemplo, a query abaixo devolve a média dos salários dos atores
 EX: SELECT AVG(salary) FROM Actor
*/
 -- a) Escreva uma query que pegue o maior salário de todos os atores e atrizes
 SELECT MAX(salary) FROM Actor;
 -- b) Escreva uma query que pegue o menor salário das atrizes
 SELECT MIN(salary) FROM Actor;
 -- c) Escreva uma query que pegue a quantidade de atrizes
 SELECT COUNT(*) FROM Actor WHERE gender = "female";
 -- d) Escreva uma query que pegue a soma de todos os salários
 SELECT SUM(salary) FROM Actor;

/* Exercício 5
 O LIMIT, como o próprio nome sugere, limita a quantidade de dados retornados.
	Se quisermos somente 3 atores da tabela:
    
    EX: SELECT * FROM Actor LIMIT 3

ORDER BY permite que ordenemos os dados dependendo de alguma coluna da tabela. 
Podemos dizer se queremos na ordem crescente (ASC) ou decrescente (DESC). 
A sintaxe é: ORDER BY coluna ASC/DESC. Se quisermos os atores em ordem alfabética:
	EX: SELECT * FROM Actor ORDER BY name ASC
    
Podemos juntar com o LIMIT e pegarmos os 4 primeiros atores (em ordem alfabética):    
	EX: SELECT * FROM Actor ORDER BY name ASC LIMIT 4
 
Até pegar somente as 4 primeiras atrizes em ordem alfabética: 
    EX: SELECT * FROM Actor WHERE gender = 'female' ORDER BY name ASC LIMIT 4

O último é um operador que permite agrupar os dados em relação a alguma coluna 
da tabela: GROUP BY. Ele normalmente é usado junto com algumas das funções que 
já vimos: AVG, COUNT, SUM, etc. A query abaixo retorna a quantidade de atores e 
atrizes na tabela (ou seja, em relação ao gender)   
	EX: SELECT COUNT(*), gender FROM Actor GROUP BY gender
*/

-- a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
SELECT COUNT(*), gender FROM Actor GROUP BY gender; 
-- RESPOSTA: ele retorar a soma de todos atores e atrizes contados 

-- b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
SELECT id, name FROM Actor ORDER BY name DESC;

-- c) Faça uma query que retorne todas as pessoas atoras ordenados pelo salário
SELECT * FROM Actor  ORDER BY salary;

-- d) Faça uma query que retorne as pessoas atoras com os três maiores salarios
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3; 

-- e) Faça uma query que retorne a média de salário por gênero
SELECT AVG(salary) FROM Actor GROUP BY gender;

/* Exercicio 6 
 Você já pegou o padrão né? Primeiro fazemos algo guiado e depois deixamos você fazer a sós!
*/

-- a) Altere a tabela de Movies e adicione um novo parâmetro: playing_limit_date que
-- indique a data limite em que o filme será passado no cinema. 
ALTER TABLE Movie ADD playing_limit_date DATE;

-- b) Altere a tabela de Movies para que o parâmetro avaliação torne-se rating e 
-- possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.
ALTER TABLE Movie CHANGE rating rating VARCHAR(10) NOT NULL;

-- ALTER TABLE Movie DROP COLUMN playing_limit_date;
SELECT *  FROM Movie; 
-- c) Atualize dois filmes de tal forma que tenhamos um  ainda esteja em cartaz, e outro que já tenha saído

UPDATE Movie SET playing_limit_date = (release_Date + INTERVAL 20 year)  WHERE id = "001";

/* d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a 
 sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o 
 resultado e explique.
*/
DELETE FROM Movie WHERE id = "002" -- nao entendi oque tem que fazer direito
