package br.com.caradmapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.caradmapi.model.Despesa;

public interface DespesaRepository extends JpaRepository<Despesa, Integer>{

	@Query("SELECT despesa FROM Despesa despesa WHERE despesa.veiculo.id = :codigo")
	List<Despesa> listarDespesasPorVeiculo(Integer codigo);
	
}
