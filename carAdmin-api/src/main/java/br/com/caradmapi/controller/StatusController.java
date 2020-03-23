package br.com.caradmapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.caradmapi.model.Status;
import br.com.caradmapi.service.StatusService;

@RestController
@CrossOrigin
@RequestMapping("/status")
public class StatusController {

	@Autowired
	private StatusService statusService;
	
	@GetMapping("/listarStatus")
	public List<Status> listarStatus(){
		return statusService.listarStatus();
	}
	
}
