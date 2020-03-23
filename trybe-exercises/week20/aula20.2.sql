CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafeal', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
    
SELECT * FROM Escola.Alunos;
SELECT DISTINCT Nome FROM Escola.Alunos;
SELECT * FROM sakila.city;
SELECT first_name, last_name FROM sakila.customer;
SELECT 'Olá, bem vindo';
SELECT 'Antonio' AS nome, 'Paolillo' AS sobrenome, 20 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';
SELECT 13 * 8;
SELECT now() AS 'Data Atual';
SELECT CONCAT(first_name, last_name) FROM sakila.actor;
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;
SELECT * FROM sakila.film;
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;
SELECT * FROM sakila.film;
SELECT CONCAT(title, ' ', rating) AS 'Classificação' FROM sakila.film;
SELECT district, COUNT(*) FROM sakila.address
GROUP BY DISTRICT;
SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental LIMIT 10;
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;
SELECT * FROM sakila.address ORDER BY address DESC;
SELECT * FROM sakila.address ORDER BY postal_code ASC;
SELECT * FROM sakila.address ORDER BY address ASC, districT DESC;
SELECT * FROM sakila.film;
SELECT title, release_year, rental_rate FROM sakila.film;
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(*) FROM sakila.film;
SELECT * FROM sakila.film;