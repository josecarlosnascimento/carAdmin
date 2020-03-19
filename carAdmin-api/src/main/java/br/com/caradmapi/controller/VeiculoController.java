package br.com.caradmapi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.caradmapi.model.Veiculo;
import br.com.caradmapi.service.VeiculoService;

@RestController
@RequestMapping("/veiculo")
@CrossOrigin
public class VeiculoController {

	@Autowired
	private VeiculoService veiculoService;
	
	@GetMapping("/listarVeiculos")
	public List<Veiculo> listar() {
		
		List<Veiculo> veiculos = veiculoService.listar();
		
		return veiculos;
	}
	
	@PostMapping("/insert")
	public void insert(@RequestBody Veiculo veiculo) {
		veiculoService.insert(veiculo);
	}
	
	@GetMapping("/{codigo}")
	public Optional<Veiculo> findById(@PathVariable Integer codigo){
		return veiculoService.findById(codigo);
	}
	
}
