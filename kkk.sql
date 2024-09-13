CREATE SCHEMA kkk;

CREATE TABLE cliente(
    nome VARCHAR(250) NOT NULL,
    email VARCHAR(250) UNIQUE KEY NOT NULL,
    senha VARCHAR(16) NOT NULL
);
CREATE TABLE produto(
    codigo_produto INTEGER UNIQUE KEY auto increment,
    tipo VARCHAR (250) PRIMARY KEY,
    marca VARCHAR (250) NOT NULL,
    modelo VARCHAR (250) NOT NULL,
    cor VARCHAR (250) NOT NULL,
    capacidade VARCHAR (250),
    preco FLOAT NOT NULL
); 

CREATE TABLE carrinho(
    tipo VARCHAR(250) NOT NULL,
    preco FLOAT NOT NULL,
    qtd INTEGER,
    comprador VARCHAR(250) NOT NULL
    FOREIGN KEY (produto) REFERENCES (tipo),
    FOREIGN KEY (produto) REFERENCES (preco),
    FOREIGN KEY (cliente) REFERENCES (nome)
);