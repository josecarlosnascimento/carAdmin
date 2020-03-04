package br.com.caradmapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.caradmapi.model.TipoVeiculo;

public interface TipoRepository extends JpaRepository<TipoVeiculo, Integer>{

}
