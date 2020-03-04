import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocacaoPesquisaComponent } from './locacao-pesquisa/locacao-pesquisa.component';
import { LocacaoCadastrarComponent } from './locacao-cadastrar/locacao-cadastrar.component';

import {MatCardModule} from '@angular/material/card'

@NgModule({
  declarations: [LocacaoPesquisaComponent, LocacaoCadastrarComponent],
  imports: [
    CommonModule,

    MatCardModule
  ]
})
export class LocacaoModule { }
