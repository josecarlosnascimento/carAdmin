CREATE TABLE usuario(
id_usuario INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(150) NOT NULL,
senha VARCHAR (300) NOT NULL,
foto BLOB
);

INSERT INTO usuario (id_usuario, email, nome, senha) VALUES (1,'jcarlos.nascimento@outlook.com','José Carlos','$2a$10$tlFgE76lrbqPkkJOLv.MROJwK4sEFy6uoKDXfbI.RHZkSfs2DqZv2');
INSERT INTO usuario (id_usuario, email, nome, senha) VALUES (2,'diego.ferreiradelima@gmail.com','Diego Ferreira de Lima','$2a$10$tlFgE76lrbqPkkJOLv.MROJwK4sEFy6uoKDXfbI.RHZkSfs2DqZv2');
INSERT INTO usuario (id_usuario, email, nome, senha) VALUES (3,'santos.lucas00@hotmail.com','Lucas Santos Costa','$2a$10$tlFgE76lrbqPkkJOLv.MROJwK4sEFy6uoKDXfbI.RHZkSfs2DqZv2');
