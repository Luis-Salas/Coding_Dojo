SELECT countries.name, languages.language, languages.percentage 
FROM countries
LEFT JOIN languages ON countries.id = languages.country_id
WHERE language LIKE "%Slovene%";

SELECT countries.name, COUNT(cities.id) AS cities_num
FROM countries
JOIN cities ON countries.id = cities.country_id
GROUP BY countries.id;

SELECT countries.name, countries.population, cities.name
FROM countries
JOIN cities ON countries.id = cities.country_id
where countries.id = 136 AND cities.population > 500000
ORDER by cities.population DESC;

SELECT countries.name, languages.language, languages.percentage
FROM countries
JOIN languages ON countries.id = languages.country_id
WHERE languages.percentage > 89.00
ORDER BY languages.percentage DESC;

SELECT name, surface_area, population
FROM countries
WHERE surface_area < 501 AND population > 100000.00;

SELECT name, government_form, life_expectancy, capital
FROM countries
WHERE government_form = 'Constitutional Monarchy' AND life_expectancy > 75.00
AND capital > 200;

SELECT countries.name, cities.name, cities.district, cities.population
FROM countries
JOIN cities ON countries.id = cities.country_id
WHERE cities.district = 'Buenos Aires'
AND cities.population > 500000;

SELECT region, count(id) AS 'countries in region'
FROM countries
group by region
ORDER by 'countries in region' DESC;