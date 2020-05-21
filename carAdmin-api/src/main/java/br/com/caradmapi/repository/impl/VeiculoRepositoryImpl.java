package br.com.caradmapi.repository.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

public class VeiculoRepositoryImpl {

	@PersistenceContext
	private EntityManager em;

	public List<?> listarBalanco(){
		
		String sql = retornarBalancoQuery();
		
		Query query = em.createNativeQuery(sql);
		
		List<?> lista  = query.getResultList();
		
		return lista;
	}
	
	private String retornarBalancoQuery() {
		StringBuilder sql = new StringBuilder();
		
		sql.append("SELECT veic.id_veiculo, marca.descricao marca, modelo modelo, placa, COALESCE(despesa.soma, 0) valor_despesas,");
		sql.append(" COALESCE(locacao.soma,0) valor_ganho FROM veiculo veic");
		sql.append(" INNER JOIN marca marca ON marca.id_marca = veic.id_marca");
		sql.append(" LEFT JOIN (SELECT COALESCE(SUM(valor), 0) soma, despesa.veiculo_id FROM despesa GROUP BY despesa.veiculo_id) despesa on despesa.veiculo_id = veic.id_veiculo");
		sql.append(" LEFT JOIN (SELECT COALESCE(SUM(valor), 0) soma, locacao.id_veiculo FROM locacao GROUP BY locacao.id_veiculo)locacao ON locacao.id_veiculo = veic.id_veiculo");
		sql.append(" GROUP BY veic.id_veiculo, marca.descricao , modelo , placa");
		

		return sql.toString();
	}
}
