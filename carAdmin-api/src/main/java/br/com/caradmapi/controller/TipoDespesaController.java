package br.com.caradmapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.caradmapi.model.TipoDespesa;
import br.com.caradmapi.service.TipoDespesaService;

@RestController
@RequestMapping("/tipoDespesa")
@CrossOrigin
public class TipoDespesaController {

	@Autowired
	private TipoDespesaService tipoDespesaService;
	
	@GetMapping("/listarTiposDespesa")
	public List<TipoDespesa> listarTiposDespesa(){
		return tipoDespesaService.listarTiposDespesa();
	}
	
}
