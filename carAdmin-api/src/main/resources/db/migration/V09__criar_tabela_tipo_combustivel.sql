CREATE TABLE tipo_combustivel(
id_combustivel INTEGER auto_increment primary key,
descricao VARCHAR (20) 
);

INSERT INTO tipo_combustivel (descricao) VALUES ('Diesel');
INSERT INTO tipo_combustivel (descricao) VALUES ('Etanol');
INSERT INTO tipo_combustivel (descricao) VALUES ('Flex');
INSERT INTO tipo_combustivel (descricao) VALUES ('Gasolina');
INSERT INTO tipo_combustivel (descricao) VALUES ('GNV');