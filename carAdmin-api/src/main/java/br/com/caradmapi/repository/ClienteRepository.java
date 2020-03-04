package br.com.caradmapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.caradmapi.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{

	@Query("FROM Cliente cliente INNER JOIN FETCH cliente.endereco.estado")
	List<Cliente> findAll();
	
}
