package br.com.caradmapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.caradmapi.model.TipoVeiculo;
import br.com.caradmapi.service.TipoService;

@RestController
@RequestMapping("/tipo")
@CrossOrigin
public class TipoController {
	
	@Autowired
	private TipoService tipoService;
	
	@GetMapping("/listarTipos")
	public List<TipoVeiculo> listar(){
		return tipoService.listar();
	}

}
