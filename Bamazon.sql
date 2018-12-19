DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db; 
USE bamazon_db; 

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT, 
product_name VARCHAR (100) NOT NULL,
department_name VARCHAR (100) NOT NULL, 
price DECIMAL (10, 2) NOT NULL , 
stock_quantity INT (100) NOT NULL,
PRIMARY KEY (item_id) );


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
("computer", "technology", 1000.00, 100),
("camera", "technology", 650.00, 100),
("computer", "technology", 1000.00, 100),
("camera", "technology", 650.00, 100),
("computer", "technology", 1000.00, 100),
("camera", "technology", 650.00, 100),
("computer", "technology", 1000.00, 100),
("camera", "technology", 650.00, 100),
("socks", "clothing", 150.00, 100);

SELECT * FROM products; 

