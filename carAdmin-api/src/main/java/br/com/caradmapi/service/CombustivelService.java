package br.com.caradmapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.caradmapi.model.TipoCombustivel;
import br.com.caradmapi.repository.CombustivelRepository;

@Service
public class CombustivelService {

	@Autowired
	private CombustivelRepository statusRepository;
	
	
	public List<TipoCombustivel> listarCombustiveis(){
		return statusRepository.findAll();
	}
	
	
}
