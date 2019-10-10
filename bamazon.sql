DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(25) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toilet Paper", "Bathroom Items", 4.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothbrush", "Bathroom Items", 2.50, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper Towel", "Kitchen", 4.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Non-stick Skillet", "Kitchen", 9.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Electronics", 299.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Trident Gum", "Snacks", 1.99, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Orange Juice", "Beverages", 1.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Basketball", "Sports", 14.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Queen-size Mattress", "Bedroom Items", 249.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook Air", "Electronics", 799.99, 15);