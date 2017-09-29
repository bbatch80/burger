CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id int AUTO_INCREMENT NOT NULL,
burger_name varchar(40) NOT NULL,
devoured BOOLEAN NOT NULL,
dateAdded TIMESTAMP NOT NULL,
PRIMARY KEY (id)
 );