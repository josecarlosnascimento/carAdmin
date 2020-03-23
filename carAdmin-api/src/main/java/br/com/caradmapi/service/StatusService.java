package br.com.caradmapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.caradmapi.model.Status;
import br.com.caradmapi.repository.StatusRepository;

@Service
public class StatusService {

	@Autowired
	private StatusRepository statusRepository;
	
	
	public List<Status> listarStatus(){
		return statusRepository.findAll();
	}
	
}
