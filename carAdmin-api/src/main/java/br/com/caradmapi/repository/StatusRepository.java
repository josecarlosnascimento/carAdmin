package br.com.caradmapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.caradmapi.model.Status;

public interface StatusRepository extends JpaRepository<Status, Integer>{

}
