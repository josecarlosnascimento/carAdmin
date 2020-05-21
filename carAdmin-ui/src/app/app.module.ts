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

import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CpfPipe } from './cpf.pipe'; 
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SegurancaModule } from './seguranca/seguranca.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { LocacaoCadastrarComponent } from './locacao/locacao-cadastrar/locacao-cadastrar.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>)= null;;


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,

    CategoriasComponent,
    ClientesPesquisaComponent,
    DashboardComponent,
    LocacaoPesquisaComponent,

    BalancoListagemComponent,
    
    ClientesCadastroComponent,
    LocacaoCadastrarComponent,
    CpfPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(options),

    FormsModule,
    ReactiveFormsModule,

    SegurancaModule,

    MatButtonModule,
     
    MatCardModule,
    MatTableModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
