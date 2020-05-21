package br.com.caradmapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.caradmapi.model.Locacao;
import br.com.caradmapi.repository.LocacaoRepository;

@Service
public class LocacaoService {

	@Autowired
	private LocacaoRepository locacaoRepository;
	
	public List<Locacao> listarLocacaoPorVeiculo(Integer veiculo){
		return locacaoRepository.listarLocacaoPorVeiculo(veiculo);
	}

	
}
