SELECT * FROM sakila.actor
WHERE last_name = "NICHOLSON";
SELECT * FROM sakila.film
WHERE rental_duration <> 5;
SELECT * FROM sakila.film
WHERE rental_duration <> 5 AND film_id > 10 AND rating = 'NC-17';
SELECT * FROM sakila.film
WHERE rental_duration > 5 OR rental_duration <> 5;
SELECT * FROM sakila.rental
WHERE return_date IS NULL;
SELECT * FROM sakila.staff
WHERE active IS TRUE;
SELECT * FROM sakila.address
WHERE address2 IS NOT NULL;
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');
SELECT * FROM sakila.customer
WHERE customer_id in (1, 2, 3, 4, 5);
-- Encontra todos os pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 17%';
SELECT * FROM sakila.film
WHERE title LIKE '___%gon%' AND description LIKE '%documentary%';
SELECT rental_date FROM sakila.rental
WHERE rental_id = 10330;
SELECT * from sakila.language
WHERE name BETWEEN 'English' AND 'German';