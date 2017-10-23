DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE items (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(10) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("doll", "Toys", 12.49, 5);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("toaster", "Appliances", 18.99, 5);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("blender", "Appliances", 24.99, 10);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("bicycle", "Sports", 74.99, 6);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("tent", "Camping", 114.99, 5);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("lantern", "Camping", 8.49, 14);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("rollerblades", "Sports", 52.99, 18);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", 8.49, 9);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("ipod", "Electronics", 8.49, 12);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Lego", "Toys", 8.49, 6);