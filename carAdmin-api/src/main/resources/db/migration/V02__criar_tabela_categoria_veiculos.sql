CREATE TABLE categoria(
id_categoria INTEGER auto_increment primary key,
descricao VARCHAR (20),
valor_diaria DOUBLE NOT NULL,
valor_multa DOUBLE NOT NULL
);

INSERT INTO categoria (descricao, valor_diaria, valor_multa) VALUES ('BAG', 200.00, 5);
INSERT INTO categoria (descricao, valor_diaria, valor_multa) VALUES ('Camionete', 200.00, 5);
INSERT INTO categoria (descricao, valor_diaria, valor_multa) VALUES ('Econômico', 50.00, 3);
INSERT INTO categoria (descricao, valor_diaria, valor_multa) VALUES ('Esportivo', 300.00, 10);
INSERT INTO categoria (descricao, valor_diaria, valor_multa) VALUES ('Família', 100.00, 5);
INSERT INTO categoria (descricao, valor_diaria, valor_multa) VALUES ('Luxo', 250.00, 20);