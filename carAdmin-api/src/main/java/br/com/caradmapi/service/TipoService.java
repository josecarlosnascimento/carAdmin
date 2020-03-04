package br.com.caradmapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.caradmapi.model.TipoVeiculo;
import br.com.caradmapi.repository.TipoRepository;

@Service
public class TipoService {

	@Autowired
	private TipoRepository tipoRepository;
	
	public List<TipoVeiculo> listar(){
		return tipoRepository.findAll();
	}
	
}
