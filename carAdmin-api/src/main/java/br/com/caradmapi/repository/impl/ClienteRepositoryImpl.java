package br.com.caradmapi.repository.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class ClienteRepositoryImpl{
	
	@PersistenceContext
	private EntityManager em;

}
