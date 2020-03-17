package br.com.caradmapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.caradmapi.model.TipoDespesa;
import br.com.caradmapi.repository.TipoDespesaRepository;

@Service
public class TipoDespesaService {

	@Autowired
	private TipoDespesaRepository tipoDespesaRepository;
	
	public List<TipoDespesa> listarTiposDespesa(){
		return tipoDespesaRepository.findAll();
	}
	
}
