package br.com.caradmapi.repository.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import br.com.caradmapi.model.Despesa;

public class DespesaRepositoryImpl {

	@PersistenceContext
	private EntityManager em;

	public List<Despesa> buscarDespesasPorVeiculo(Long idVeiculo){
		
		String sql = "FROM Despesa ds INNER JOIN FETCH tipo tp  INNER JOIN FETCH veiculo vec where vec.id = :veiculo";
		
		Query query = em.createNativeQuery(sql);
		query.setParameter("veiculo", idVeiculo);
		
		List<Despesa> lista  = query.getResultList();
		
		return lista;
	}
	
	
	
}
