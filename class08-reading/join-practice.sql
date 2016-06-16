-- JOIN is no different from INNER JOIN; both work the same way in this instance
SELECT * FROM [Orders]
JOIN [employees]
  ON [orders].employeeid = [employees].employeeid

-- JOIN data using three or more tables
SELECT * FROM [orders]
JOIN [employees]
  ON [orders].employeeid = [employees].employeeid
JOIN [customers]
  ON [orders].customerid = [customers].customerid

  -- LEFT JOIN is no different from LEFT OUTER JOIN; both work the same way in this instance
SELECT * FROM [Orders]
LEFT OUTER JOIN [employees]
  ON [orders].employeeid = [employees].employeeid

  -- RIGHT JOIN is no different from RIGHT OUTER JOIN; both work the same way in this instance
SELECT *
FROM games
RIGHT JOIN  [city]
  ON [games].city = [city].name

-- Hack of a FULL join; I would assume FULL JOIN is the same as FULL OUTER JOIN
SELECT * FROM games
    LEFT JOIN city
    ON games.city = city.name
  UNION
  SELECT * FROM games
   RIGHT JOIN city
   ON games.city = city.name;
