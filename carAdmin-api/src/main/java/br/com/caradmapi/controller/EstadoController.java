package br.com.caradmapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.caradmapi.model.Estado;
import br.com.caradmapi.service.EstadoService;

@RestController
@RequestMapping("/estado")
@CrossOrigin
public class EstadoController {
	
	@Autowired
	private EstadoService estadoService;

	@GetMapping("/listarEstados")
	public List<Estado> findAll(){
		return estadoService.findAll();
	}
	
}
