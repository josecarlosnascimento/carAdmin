package br.com.caradmapi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.caradmapi.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer>{

	Optional<Categoria> findByDescricao(String descricao);
	
}
