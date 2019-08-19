DROP DATABASE IF EXISTS products_db;
CREATE DATABASE products_db;

USE products_db;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INTEGER(10) NULL,
  stock_quantity INTEGER(10) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Television', 'Electronics', 120, 5);
VALUES ('Macbook Air', 'Electronics', 200, 5);
VALUES ('Amazon Echo', 'Electronics', 80, 5);
VALUES ('Dashcam', 'Electronics', 25, 5);




