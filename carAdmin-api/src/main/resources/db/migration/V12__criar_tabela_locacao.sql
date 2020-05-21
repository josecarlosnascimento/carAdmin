CREATE TABLE locacao(
id_locacao INTEGER AUTO_INCREMENT primary KEY,
id_veiculo INTEGER,
id_cliente INTEGER,
data_inicio DATE,
data_previsao DATE,
data_entrega DATE,
valor DOUBLE,
	FOREIGN KEY (id_veiculo) REFERENCES veiculo (id_veiculo),
	FOREIGN KEY (id_cliente) REFERENCES cliente (id_cliente)
);