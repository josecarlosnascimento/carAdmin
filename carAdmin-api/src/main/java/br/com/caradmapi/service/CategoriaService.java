package br.com.caradmapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import br.com.caradmapi.model.Categoria;
import br.com.caradmapi.repository.CategoriaRepository;

@Service
public class CategoriaService {
	
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	public List<Categoria> listar(){
		return categoriaRepository.findAll();
	}
	
	public Categoria salvar(Categoria categoria) {
		
		
		Optional<Categoria> categoriaSalva  = categoriaRepository.findByDescricao(categoria.getDescricao());
		
		if(categoriaSalva.isPresent()) {
			throw new DataIntegrityViolationException("Esta descrição já existe.");
		}
		
		
		return categoriaRepository.save(categoria);
	}

}
