import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias/categorias.component';
import { ClientesPesquisaComponent } from './clientes/clientes-pesquisa/clientes-pesquisa.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LocacaoPesquisaComponent } from './locacao/locacao-pesquisa/locacao-pesquisa.component';
import { BalancoListagemComponent } from './balanco/balanco-listagem/balanco-listagem.component';
import { ClientesCadastroComponent } from './clientes/clientes-cadastro/clientes-cadastro.component';
import { LocacaoCadastrarComponent } from './locacao/locacao-cadastrar/locacao-cadastrar.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'clientes', component: ClientesPesquisaComponent},
  {path: 'locacao', component: LocacaoPesquisaComponent},
  {path: 'balanco', component: BalancoListagemComponent},

  {path: 'clientes/novo', component: ClientesCadastroComponent},
  {path: 'locacao/novo', component: LocacaoCadastrarComponent},


  {path: 'veiculos', loadChildren: () => import('./veiculos/veiculos.module').then(m => m.VeiculosModule)},
  {path: 'despesas', loadChildren: () => import('./despesas/despesas.module').then(m => m.DespesasModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
