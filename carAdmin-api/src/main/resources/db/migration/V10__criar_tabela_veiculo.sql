CREATE TABLE veiculo(
id_veiculo INTEGER AUTO_INCREMENT primary KEY,
id_marca INTEGER,
modelo VARCHAR(50),
ano_fabricacao SMALLINT,
ano_modelo SMALLINT,
id_cor INTEGER,
id_categoria INTEGER,
id_tipo INTEGER,
id_combustivel INTEGER,
id_status SMALLINT,
placa VARCHAR(10),
chassi VARCHAR(50),
 FOREIGN KEY (id_marca) REFERENCES marca (id_marca),
  FOREIGN KEY (id_cor) REFERENCES cor (id_cor),
  FOREIGN KEY (id_categoria) REFERENCES categoria (id_categoria),
  FOREIGN KEY (id_tipo) REFERENCES tipo_veiculo (id_tipo_veiculo),
  FOREIGN KEY (id_combustivel) REFERENCES tipo_combustivel (id_combustivel),
  FOREIGN KEY (id_status) REFERENCES status (id_status)
  
);