package br.com.caradmapi.repository.impl.dto;

import java.math.BigDecimal;

public class VeiculoDto {

	private String marca;
	private String modelo;
	private String placa;
	private BigDecimal valorGanhos;
	private BigDecimal valorDespesas;
	
	public VeiculoDto(String marca, String modelo, String placa, BigDecimal valorGanhos, BigDecimal valorDespesas) {
		super();
		this.marca = marca;
		this.modelo = modelo;
		this.placa = placa;
		this.valorGanhos = valorGanhos;
		this.valorDespesas = valorDespesas;
	}
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public String getModelo() {
		return modelo;
	}
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	public String getPlaca() {
		return placa;
	}
	public void setPlaca(String placa) {
		this.placa = placa;
	}
	public BigDecimal getValorGanhos() {
		return valorGanhos;
	}
	public void setValorGanhos(BigDecimal valorGanhos) {
		this.valorGanhos = valorGanhos;
	}
	public BigDecimal getValorDespesas() {
		return valorDespesas;
	}
	public void setValorDespesas(BigDecimal valorDespesas) {
		this.valorDespesas = valorDespesas;
	}
	
	
	
}
