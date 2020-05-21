package br.com.caradmapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.caradmapi.model.Locacao;

public interface LocacaoRepository extends JpaRepository<Locacao, Integer>{
	
	@Query("SELECT locacao FROM Locacao locacao WHERE locacao.veiculo.id = :codigo")
	List<Locacao> listarLocacaoPorVeiculo(Integer codigo);

}
