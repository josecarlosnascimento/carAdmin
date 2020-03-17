import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosPesquisaComponent } from './veiculos-pesquisa/veiculos-pesquisa.component';
import { VeiculosCadastroComponent } from './veiculos-cadastro/veiculos-cadastro.component';
import { VeiculoPesquisaFiltroComponent } from './veiculo-pesquisa-filtro/veiculo-pesquisa-filtro.component';

import { MatTableModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VeiculosRoutingModule } from './veiculos-routing.module';

@NgModule({
  declarations: [VeiculoPesquisaFiltroComponent, VeiculosPesquisaComponent, VeiculosCadastroComponent],
  imports: [
    CommonModule,
    MatTableModule,

    FormsModule,
    ReactiveFormsModule, 

    VeiculosRoutingModule

  ],
  exports:[VeiculoPesquisaFiltroComponent, VeiculosPesquisaComponent, VeiculosCadastroComponent]
})
export class VeiculosModule { }
