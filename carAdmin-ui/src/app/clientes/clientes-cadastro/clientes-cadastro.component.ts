import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.css']
})
export class ClientesCadastroComponent implements OnInit {

  estados = []
  formulario: FormGroup;


  constructor(private clienteService: ClienteService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarFormulario();
    this.listarEstados();
  }

  listarEstados(){
    this.clienteService.listarEstados().then(result => {
      this.estados = result;
    });
  }

  salvar(){
    this.clienteService.salvar(this.formulario.value)
  }

  configurarFormulario() {

    this.formulario = this.formBuilder.group({

      id: [],
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      logradouro: [null, Validators.required],
      numero: [null, Validators.required],
      complemento: [null, Validators.required],
      bairro: [null, Validators.required],
      cep: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required]
      
    })

  }
}
