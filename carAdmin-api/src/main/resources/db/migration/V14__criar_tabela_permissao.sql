CREATE TABLE permissao(
id_permissao INTEGER AUTO_INCREMENT PRIMARY KEY,
DESCRICAO VARCHAR(100)
);

INSERT INTO permissao(id_permissao, descricao) VALUES (1, 'ROLE_ALL');
