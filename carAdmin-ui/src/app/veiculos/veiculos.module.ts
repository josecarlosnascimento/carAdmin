import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosPesquisaComponent } from './veiculos-pesquisa/veiculos-pesquisa.component';
import { VeiculosCadastroComponent } from './veiculos-cadastro/veiculos-cadastro.component';



@NgModule({
  declarations: [VeiculosPesquisaComponent, VeiculosCadastroComponent],
  imports: [
    CommonModule
  ]
})
export class VeiculosModule { }
