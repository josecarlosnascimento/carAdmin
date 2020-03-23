package br.com.caradmapi.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.caradmapi.model.Despesa;
import br.com.caradmapi.repository.DespesaRepository;

@Service
public class DespesaService {
	
	@Autowired
	private DespesaRepository despesaRepository;
	
	public void inserirDespesa(Despesa despesa) {
		despesa.setData(new Date());
		despesaRepository.save(despesa);
	}
	
	public List<Despesa> listarDespesasPorVeiculo(Integer codigo){
		return despesaRepository.listarDespesasPorVeiculo(codigo);
	}

}
