package br.com.caradmapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.caradmapi.model.Despesa;
import br.com.caradmapi.repository.DespesaRepository;

@Service
public class DespesaService {
	
	@Autowired
	private DespesaRepository despesaRepository;
	
	public void inserirDespesa(Despesa despesa) {
		despesaRepository.save(despesa);
	}

}
