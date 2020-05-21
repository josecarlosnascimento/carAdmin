CREATE TABLE tipo_despesa(
id_tipo_despesa INTEGER auto_increment primary key,
descricao VARCHAR (20) 
);

INSERT INTO tipo_despesa (descricao) VALUES ('Borracharia');
INSERT INTO tipo_despesa (descricao) VALUES ('Combustível');
INSERT INTO tipo_despesa (descricao) VALUES ('Revisão');
INSERT INTO tipo_despesa (descricao) values ('Funilaria');
INSERT INTO tipo_despesa (id_tipo_despesa, descricao) VALUES (99, 'Outro'); 