CREATE TABLE status(
id_status SMALLINT auto_increment primary key,
descricao VARCHAR (20) 
);

INSERT INTO status (descricao) VALUES ('Avariado');
INSERT INTO status (descricao) VALUES ('Em Manutenção');
INSERT INTO status (descricao) VALUES ('Disponivel');
INSERT INTO status (descricao) VALUES ('Locado');
INSERT INTO status (descricao) VALUES ('Reservado');