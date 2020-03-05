package br.com.caradmapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.caradmapi.model.Cor;
import br.com.caradmapi.service.CorService;

@RestController
@RequestMapping("/cor")
@CrossOrigin
public class CorController {
	
	@Autowired
	private CorService corService;
	
	@GetMapping("/listarCores")
	@PreAuthorize("hasAuthority('ROLE_ALL')")
	public List<Cor> findAll(){
		return corService.listAll();
	}

}
