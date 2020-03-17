import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculosPesquisaComponent } from './veiculos-pesquisa/veiculos-pesquisa.component';
import { VeiculosCadastroComponent } from './veiculos-cadastro/veiculos-cadastro.component';


const routes: Routes = [
  {
    path: '',
    component: VeiculosPesquisaComponent,
  },
  {
    path: 'novo',
    component: VeiculosCadastroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
