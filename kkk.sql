CREATE SCHEMA kkk;

CREATE TABLE cliente(
    nome VARCHAR(250) NOT NULL,
    email VARCHAR(250) UNIQUE KEY NOT NULL,
    senha VARCHAR(16) NOT NULL
);
CREATE TABLE produto(
    
);