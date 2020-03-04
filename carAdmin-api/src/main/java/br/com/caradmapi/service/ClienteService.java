package br.com.caradmapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.caradmapi.model.Cliente;
import br.com.caradmapi.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;
	
	public List<Cliente> findAll() {
		List<Cliente> clientes = clienteRepository.findAll();
		
		return clientes;
	}
	
}
