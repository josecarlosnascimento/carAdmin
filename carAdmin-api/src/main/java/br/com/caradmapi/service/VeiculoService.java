package br.com.caradmapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.caradmapi.model.Veiculo;
import br.com.caradmapi.repository.VeiculoRepository;

@Service
public class VeiculoService {

	@Autowired
	private VeiculoRepository veiculoRepository;
	
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
}
