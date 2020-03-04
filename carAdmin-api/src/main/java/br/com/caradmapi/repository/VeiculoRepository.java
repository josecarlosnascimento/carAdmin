package br.com.caradmapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.caradmapi.model.Veiculo;

public interface VeiculoRepository extends JpaRepository<Veiculo, Integer> {



}
