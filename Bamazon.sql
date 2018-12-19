DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db; 
USE bamazon_db; 

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT, 
product_name VARCHAR (100) NOT NULL,
department_name VARCHAR (100) NOT NULL, 
price DECIMAL (10, 2) NOT NULL , 
stock_quantity INT (100) NOT NULL,
PRIMARY KEY (item_id) 
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
("mac book pro", "technology", 1000.00, 100),
("go pro ", "cameras", 350.00, 100),
("leather jacket", "clothing", 200.00, 100),
("golf clubs", "sports", 650.00, 100),
("snowboard", "sports", 400.00, 100),
("shoes", "footwear", 100.00, 100),
("apple imac pro", "technology", 5000.00, 100),
("yeti rambler", "home goods", 650.00, 100),
("couch", "home furnishings", 1500.00, 100);
("socks", "clothing", 15.00, 100);


SELECT * FROM products; 

