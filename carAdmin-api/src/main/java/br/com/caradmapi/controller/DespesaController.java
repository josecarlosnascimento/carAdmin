package br.com.caradmapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.caradmapi.model.Despesa;
import br.com.caradmapi.service.DespesaService;

@RestController
@RequestMapping("/despesa")
@CrossOrigin
public class DespesaController {
	
	@Autowired
	private DespesaService despesaService;
	
	
	@PostMapping("/inserirDespesa")
	public void inserirDespesas(@RequestBody Despesa despesa){
		despesaService.inserirDespesa(despesa);
	}
	
	@GetMapping("/despesaPorVeiculo/{codigo}")
	public List<Despesa> listarDespesasPorVeiculo(@PathVariable Integer codigo){
		return despesaService.listarDespesasPorVeiculo(codigo);
	}
}
