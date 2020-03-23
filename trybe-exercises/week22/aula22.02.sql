USE meustestes;
CREATE TABLE copiando_estrutura LIKE sakila.actor;
SELECT * FROM meustestes.copiando_estrutura;

CREATE VIEW top_10_customers AS
    SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
    FROM sakila.payment p
    INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;
SELECT * FROM meustestes.top_10_customers;
DROP VIEW meustestes.top_10_customers;

CREATE VIEW movie_languages AS
	SELECT f.title, f.language_id, l.name
    FROM sakila.film f
    INNER JOIN sakila.language l
    ON f.language_id = l.language_id;
SELECT * FROM meustestes.movie_languages;
DROP VIEW movie_languages;

-- Adicionar uma nova coluna
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;
-- Modificar o tipo e propriedades de uma coluna
ALTER TABLE noticia MODIFY noticia_id BIGINT;
-- Adicionar incremento automático a uma coluna
-- (especifique o tipo da coluna + auto_increment)
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;
-- Alterar o tipo e nome de uma coluna
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;
-- Dropar/Excluir uma coluna
ALTER TABLE noticia DROP COLUMN data_postagem;
-- Adicionar uma nova coluna após outra
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;
SHOW COLUMNS FROM sakila.noticia;

USE sakila;
CREATE TABLE computador(
    computador_id INT,
    marca varchar(10),
    preco INT
) engine = InnoDB;
ALTER TABLE computador ADD COLUMN memoria_ram INT NOT NULL;
ALTER TABLE computador MODIFY computador_id INT PRIMARY KEY auto_increment;
DROP TABLE sakila.computador;

USE rede_social;
DELIMITER $$
CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END; $$
DELIMITER ;

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUES ('exclusão', NOW());
END; $$
