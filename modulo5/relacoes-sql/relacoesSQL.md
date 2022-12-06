-- exercicio 1  
-- A) Explique o que é uma chave estrangeira.
-- Resposta: Pelo que entendi é para fazer uma ligação com uma tabela externa
-- B) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

Create Table Rating (
	id VARCHAR(255) PRIMARY KEY,
    COMMENT TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating Values 
("004", "Bom", 6.4, "001"),
("001", "Bom", 6.3, "002"),
("003", "Muito Bom", 9.7, "005"),
("002", "Mediano", 5, "004"),
("005", "Ruim", 2.4, "003");  

-- C) Tente Criar uma avaliação para um filme que não existe (ou seja, um id inválido).
-- Resposta: error CODE :1452. avisando que nao pode atualizar uma linha filha: a chave estrangeira falha na restrinção
INSERT INTO Rating Value 
("006", "pessimo", 0, "007");

-- D) Altere a tabela de filme para que ela não tenha mais uma coluna chamada rating.
ALTER TABLE Movie DROP COLUMN rating;

-- E) Tente apagar um filme que possua avaliações.Anote e explique o resultado da query.
-- Resposta: Error Code: 1451 disse que nao pode deletar ou atualizar a linha: falha , restrinção da chave estrangeira
DELETE FROM Movie WHERE id = "003";

SELECT * FROM Movie;
SELECT * FROM Rating;
-- -- -- -- -- -- - -- - - - - - - - - - - - - ----------------------- - --------- -------- -- - - - - --
-- EXERCICIO 2
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);


-- A) Explique, com as suas palavras, essa tabela
-- Resposta: não sei oque falar, não entendi bem a questão

-- B) Crie, ao menos, 6 relações nessa tabela 
INSERT INTO MovieCast VALUES 
("001", "002"),
("005", "002"),
("002", "001"),
("004","005"),
("003","004");
DESCRIBE MovieCast;
SELECT * FROM MovieCast;

-- C) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
-- Resposta: Error Code: 1452 nao pode adicionar a linha filho,  a chave estrangeira falhou

-- D) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*
-- Resposta: vai dar o msm erro do exercicio 1 E)

-- EXERCICIO 3
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- A) Explique, com suas palavras, a query acima. O que é o operador ON?
-- Resposta: ele serve como verificaçao igual o where, tanto que se substituir um por outro o resultado sera o mesmo
SELECT * FROM Movie 
INNER JOIN Rating WHERE Movie.id = Rating.movie_id;
-- B) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
SELECT Movie.id,Rating.rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id; 