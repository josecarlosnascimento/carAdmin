package br.com.caradmapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.caradmapi.model.TipoCombustivel;
import br.com.caradmapi.service.CombustivelService;

@RestController
@RequestMapping("/combustivel")
@CrossOrigin
public class CombustivelController {

	@Autowired
	private CombustivelService combustivelService;
	
	@GetMapping("/listarCombustiveis")
	public List<TipoCombustivel> listarStatus(){
		return combustivelService.listarCombustiveis();
	}
	
}
