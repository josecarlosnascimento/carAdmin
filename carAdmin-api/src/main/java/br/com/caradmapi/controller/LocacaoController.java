package br.com.caradmapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.caradmapi.model.Locacao;
import br.com.caradmapi.service.LocacaoService;

@RestController
@RequestMapping("/locacao")
@CrossOrigin
public class LocacaoController {
	
	@Autowired
	private LocacaoService locacaoService;
	
	@GetMapping("/balanco/{veiculo}")
	public List<Locacao> listarLocacaoPorVeiculo(@PathVariable Integer veiculo){
		return locacaoService.listarLocacaoPorVeiculo(veiculo);
	}

}
