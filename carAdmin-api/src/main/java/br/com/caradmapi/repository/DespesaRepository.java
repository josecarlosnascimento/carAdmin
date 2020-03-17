package br.com.caradmapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.caradmapi.model.Despesa;

public interface DespesaRepository extends JpaRepository<Despesa, Integer>{

}
