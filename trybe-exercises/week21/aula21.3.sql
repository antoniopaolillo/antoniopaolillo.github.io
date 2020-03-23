SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address;

SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = query_externo.address_id
    ) AS address
FROM sakila.customer AS query_externo;

SELECT title, language_id, (
	SELECT name
	FROM sakila.language
	WHERE sakila.language.language_id = sakila.film.language_id
) AS idioma 
FROM sakila.film;

SELECT first_name, last_name, address_id, 
	(SELECT address 
    FROM sakila.address 
    WHERE sakila.address.address_id = sakila.staff.address_id)
	AS endereco 
FROM sakila.staff;

SELECT f.title, f.language_id, l.name
FROM sa	kila.film f
INNER JOIN sakila.language l ON f.language_id = l.language_id;

SELECT s.first_name, s.last_name, s.address_id, a.address
FROM sakila.staff s
INNER JOIN sakila.address a WHERE s.address_id = a.address_id;

SELECT * FROM sakila.payment;

