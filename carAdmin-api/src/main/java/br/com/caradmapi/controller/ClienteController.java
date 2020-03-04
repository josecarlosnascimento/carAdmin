package br.com.caradmapi.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.caradmapi.model.Cliente;
import br.com.caradmapi.service.ClienteService;

@RestController
@RequestMapping("/cliente")
@CrossOrigin
public class ClienteController {

	@Autowired
	private ClienteService clienteService;
	
	@GetMapping("/listarClientes")
	public List<Cliente> findAll() {
		return clienteService.findAll();
	}
	
}
