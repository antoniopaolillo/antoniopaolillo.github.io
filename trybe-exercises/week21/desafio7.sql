SELECT h.employee_id,
(SELECT UCASE(CONCAT(e.first_name, ' ', e.last_name)) FROM hr.employees e 
WHERE h.employee_id = e.employee_id)
 AS 'Nome completo',
 h.start_date,
 (SELECT salary FROM hr.employees e WHERE h.employee_id = e.employee_id) as 'salary'
 FROM 
(SELECT * FROM hr.job_history h WHERE MONTH(h.start_date) IN ('01', '02', '03')) AS h ORDER BY 
(SELECT UCASE(CONCAT(e.first_name, ' ', e.last_name)) FROM hr.employees e 
WHERE h.employee_id = e.employee_id);
