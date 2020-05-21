CREATE TABLE despesa(
id_despesa INTEGER AUTO_INCREMENT primary KEY,
descricao  VARCHAR(50) NOT NULL,
data DATE NOT NULL,
valor DOUBLE NOT NULL,
tipo_id INTEGER,
veiculo_id integer,
  FOREIGN KEY (tipo_id) REFERENCES tipo_despesa (id_tipo_despesa),
  FOREIGN KEY (veiculo_id) REFERENCES veiculo (id_veiculo)
);