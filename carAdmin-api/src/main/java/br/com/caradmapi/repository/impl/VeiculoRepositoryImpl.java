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
		
		sql.append(" SELECT marca.descricao marca, modelo modelo, placa, COALESCE(SUM(despesa.valor),0) valor_despesas, COALESCE(SUM(locacao.valor),0) valor_ganho FROM veiculo veiculo");
		sql.append(" INNER JOIN marca marca ON marca.id = veiculo.marca");
		sql.append(" LEFT JOIN despesa despesa ON despesa.veiculo = veiculo.id");
		sql.append(" LEFT JOIN locacao locacao ON locacao.id_veiculo = veiculo.id");
		
		return sql.toString();
	}
}
