package br.com.caradmapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.caradmapi.model.Marca;
import br.com.caradmapi.service.MarcaService;

@RestController
@RequestMapping("/marca")
@CrossOrigin
public class MarcaController {
	
	@Autowired
	private MarcaService marcaService;

	@GetMapping("/listarMarcas")
	public List<Marca> listarMarcas(){
		return this.marcaService.listarMarcas();
	}
	
	
}
