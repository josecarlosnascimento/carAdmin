package br.com.caradmapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.caradmapi.model.TipoCombustivel;

public interface CombustivelRepository extends JpaRepository<TipoCombustivel, Integer>{

}
