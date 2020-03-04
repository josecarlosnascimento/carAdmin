package br.com.caradmapi.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Locacao implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private Veiculo veiculo;
	
	private Cliente cliente;
	
	private Date dataInicio;
	
	private Date DataPrevisao;
	
	private Date dataEntrega;
	
	private double valor;
	
}
