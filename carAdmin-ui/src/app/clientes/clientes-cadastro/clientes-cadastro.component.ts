import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.css']
})
export class ClientesCadastroComponent implements OnInit {

  estados = []
  formulario: FormGroup;


  constructor(private clienteService: ClienteService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService) { }

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
    this.clienteService.salvar(this.formulario.value).then(() =>{
      this.formulario.reset();
      this.toastr.success('Cliente cadastrado com sucesso.')
    }
    )
  }

  configurarFormulario() {

    this.formulario = this.formBuilder.group({

      id: [],
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      email: [null, Validators.required],
      telefone: [null, Validators.required],

      endereco: this.formBuilder.group({
        logradouro: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null, Validators.required],
        bairro: [null, Validators.required],
        cep: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      })
      
    })

  }
}
