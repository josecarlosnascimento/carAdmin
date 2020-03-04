import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesPesquisaComponent } from './clientes-pesquisa/clientes-pesquisa.component';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ClientesPesquisaComponent, ClientesCadastroComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ]
})
export class ClientesModule { }
