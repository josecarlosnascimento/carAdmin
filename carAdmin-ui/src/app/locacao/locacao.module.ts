import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocacaoPesquisaComponent } from './locacao-pesquisa/locacao-pesquisa.component';
import { LocacaoCadastrarComponent } from './locacao-cadastrar/locacao-cadastrar.component';

import {MatCardModule} from '@angular/material/card'
import { ClientesCadastroComponent } from '../clientes/clientes-cadastro/clientes-cadastro.component';

@NgModule({
  declarations: [LocacaoPesquisaComponent, LocacaoCadastrarComponent],
  imports: [
    CommonModule,

    MatCardModule
  ],
  exports: [LocacaoCadastrarComponent],
})
export class LocacaoModule { }
