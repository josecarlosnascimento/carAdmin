import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes-pesquisa',
  templateUrl: './clientes-pesquisa.component.html',
  styleUrls: ['./clientes-pesquisa.component.css']
})
export class ClientesPesquisaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'dataNascimento', 'cidade/estado'];
  dataSource = [];

  constructor(private clienteService: ClienteService) { }


  ngOnInit() {
      this.listar();
  }

  listar(){
     this.clienteService.listarClientes().then(clientes => {
      this.dataSource = clientes;
     }
       
     );
  }


}
