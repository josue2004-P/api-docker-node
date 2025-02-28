CREATE DATABASE IF NOT EXISTS test_db;
USE test_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);

INSERT INTO users (name, email) VALUES ('Juan Pérez', 'juan@example.com');
INSERT INTO users (name, email) VALUES ('Ana Gómez', 'ana@example.com');
