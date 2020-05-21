CREATE TABLE usuario_permissao (
id_usuario INTEGER,
id_permissao INTEGER,
	FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
	FOREIGN KEY (id_permissao) REFERENCES permissao (id_permissao)
);


INSERT INTO usuario_permissao (id_usuario, id_permissao) VALUES (1,1);



 

