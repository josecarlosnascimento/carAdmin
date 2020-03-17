import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosPesquisaComponent } from './veiculos-pesquisa/veiculos-pesquisa.component';
import { VeiculosCadastroComponent } from './veiculos-cadastro/veiculos-cadastro.component';
import { VeiculoPesquisaFiltroComponent } from './veiculo-pesquisa-filtro/veiculo-pesquisa-filtro.component';

import { MatTableModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VeiculosPesquisaComponent, VeiculosCadastroComponent, VeiculoPesquisaFiltroComponent],
  imports: [
    CommonModule,
    MatTableModule,

    FormsModule,
    ReactiveFormsModule, 

  ],
  exports:[VeiculoPesquisaFiltroComponent]
})
export class VeiculosModule { }
