SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`)
VALUES ('antonio', 'paolillo', 5, 'antonio@hotmail.com', 3, 'antonio', 'ioduasd');
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username) VALUES ('antonio', 'paolillo', 5, 3, 'paoliloantonio');
INSERT INTO sakila.actor (first_name, last_name)
VALUES('Antonio','Paolillo');
SELECT * FROM sakila.actor WHERE first_name LIKE 'Antonio';
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.staff;
SELECT * FROM sakila.actor;
INSERT INTO sakila.staff (first_name, last_name, address_id, email,store_id,active,username,password,last_update) VALUES
('opa2', 'opa2', 4,'Show@sdho.com2',1,1,'opa2','aaaaa',now()),  ('antonio', 'paolillo', 5, 'asudihiusah@auhsd.com', 1, 1, 'ia', 'ia', now());
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name
FROM sakila.customer LIMIT 5;
SELECT * FROM sakila.actor;
DELETE FROM sakila.actor WHERE actor_id BETWEEN 202 AND 808;
INSERT IGNORE INTO sakila.store (store_id, manager_staff_id, address_id, last_update) VALUES (3, 3, 3, now());
