package br.com.caradmapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.caradmapi.model.Cor;
import br.com.caradmapi.repository.CorRepository;

@Service
public class CorService {
	
	@Autowired
	private CorRepository corRepository;
	
	public List<Cor> listAll(){
		return corRepository.findAll();
	}

}
