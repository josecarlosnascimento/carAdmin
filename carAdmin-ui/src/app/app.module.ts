import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { CategoriasComponent } from './categorias/categorias/categorias.component';
import { VeiculosPesquisaComponent } from './veiculos/veiculos-pesquisa/veiculos-pesquisa.component';
import { ClientesPesquisaComponent } from './clientes/clientes-pesquisa/clientes-pesquisa.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LocacaoPesquisaComponent } from './locacao/locacao-pesquisa/locacao-pesquisa.component';
import { DespesaPesquisaComponent } from './despesas/despesa-pesquisa/despesa-pesquisa.component';
import { BalancoListagemComponent } from './balanco/balanco-listagem/balanco-listagem.component';
import { ClientesCadastroComponent } from './clientes/clientes-cadastro/clientes-cadastro.component';
import { VeiculosCadastroComponent } from './veiculos/veiculos-cadastro/veiculos-cadastro.component';

import { ToastrModule } from 'ngx-toastr';

import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CpfPipe } from './cpf.pipe'; 
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SegurancaModule } from './seguranca/seguranca.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { VeiculoPesquisaFiltroComponent } from './veiculos/veiculo-pesquisa-filtro/veiculo-pesquisa-filtro.component'
import {MatButtonModule} from '@angular/material/button';
import { DespesaLancamentoComponent } from './despesas/despesa-lancamento/despesa-lancamento.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>)= null;;


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,

    CategoriasComponent,
    VeiculosPesquisaComponent,
    ClientesPesquisaComponent,
    DashboardComponent,
    LocacaoPesquisaComponent,
    DespesaPesquisaComponent,
    BalancoListagemComponent,
    
    ClientesCadastroComponent,
    VeiculosCadastroComponent,
    CpfPipe,
    VeiculoPesquisaFiltroComponent,
    DespesaLancamentoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MatTableModule,
    MatCardModule,
    
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(options),

    FormsModule,
    ReactiveFormsModule,

    SegurancaModule,

    MatButtonModule
     
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
