package br.com.caradmapi.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.caradmapi.model.Veiculo;
import br.com.caradmapi.repository.VeiculoRepository;
import br.com.caradmapi.repository.impl.VeiculoRepositoryImpl;
import br.com.caradmapi.repository.impl.dto.VeiculoDto;

@Service
public class VeiculoService {

	@Autowired
	private VeiculoRepository veiculoRepository;
	
	@Autowired
	private VeiculoRepositoryImpl veiculoRepositoryImpl;
	
	public List<Veiculo> listar(){
		List<Veiculo> veiculos = veiculoRepository.findAll();
		return veiculos;
	}
	
	public int somarQuantidadeDeVeiculosDisponiveis() {
		return this.somarQuantidadeDeVeiculosDisponiveis();
	}
	
	public void insert(Veiculo veiculo) {
		veiculoRepository.save(veiculo);
	}
	
	public Optional<Veiculo> findById(Integer codigo){
		return veiculoRepository.findById(codigo);
	}
	
	public List<VeiculoDto> listarBalanco(){
		List<?> balancos =  veiculoRepositoryImpl.listarBalanco();
		List<VeiculoDto> listaBalancos = new ArrayList<VeiculoDto>();
		
		for (Object balancoObj : balancos) {
			Object[] balanco = (Object[]) balancoObj;
			Integer idVeiculo = (Integer) balanco[0];
			String modelo = (String) balanco[1];
			String marca = (String) balanco[2];
			String placa = (String) balanco[3];
			Double valorDespesa = (Double) balanco[4];
			Double valorGanho = (Double) balanco[5];
			
			listaBalancos.add(new VeiculoDto(idVeiculo, modelo, marca, placa, BigDecimal.valueOf(valorGanho), BigDecimal.valueOf(valorDespesa)));
		}
		
		
		return listaBalancos;
		
	}
}
