package br.com.caradmapi.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.caradmapi.model.Categoria;
import br.com.caradmapi.service.CategoriaService;

@RestController
@RequestMapping("/categoria")
@CrossOrigin
public class CategoriaController {
	
	@Autowired
	private CategoriaService categoriaService;

	@GetMapping("/listarCategorias")
//	@PreAuthorize("hasAuthority('ROLE_ALL')")
	public List<Categoria> listar(){
		return categoriaService.listar();
	}
	
	@PostMapping
	public ResponseEntity<Categoria> salvar(@Valid @RequestBody Categoria categoria, HttpServletResponse response){

		Categoria categoriaSalva = categoriaService.salvar(categoria);
		
		return	ResponseEntity.status(HttpStatus.CREATED).body(categoriaSalva);
	}
}
