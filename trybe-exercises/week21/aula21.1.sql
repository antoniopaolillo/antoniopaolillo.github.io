SELECT LEFT('Oi, eu sou uma string', 5);
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');
SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT * FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;
SELECT * FROM sakila.film;
SELECT film_id, title, IF (title = 'ACE GOLDFINGER', "Já assisti esse filme", "Não conheço o filme") AS 'conheço o filme?' FROM sakila.film;
SELECT title, rating, CASE
WHEN rating = 'G' THEN 'Livre pra todos'
WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
WHEN rating = 'PG-13' THEN 'sub 13'
WHEN rating = 'R' THEN 'sub 17'
ELSE 'proibido'
END AS 'publico alvo'
FROM sakila.film;

SELECT 10 DIV 3; -- retorna resultado inteiro --
SELECT 10 MOD 3; -- retornao o resto de uma divisão --
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493
SELECT CEIL(10.51); -- 11
SELECT FLOOR(10.51); -- 10

-- número X à potência Y--
SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16
-- raiz quadrada --
SELECT SQRT(9); -- 3
-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();
-- Para gerar um valor entre 7 e 13:
SELECT FLOOR(7 + (RAND() * 6));

-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');
SELECT DATEDIFF('2020-01-31', CURRENT_DATE());
-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');
-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- Usando a coluna replacement_cost (valor de substituição) vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

-- GROUP BY remove as duplicações
-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;
-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;
-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;
-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

SELECT rating, AVG(length) AS 'apelido'
FROM sakila.film
GROUP BY rating
ORDER BY apelido DESC;

SELECT first_name, COUNT(*) AS contador
FROM sakila.actor
GROUP BY first_name
HAVING contador > 2;    

SELECT rating, SUM(replacement_cost) AS 'resultado'
FROM sakila.film
GROUP by rating
HAVING resultado > 3950.50
ORDER BY resultado;
    