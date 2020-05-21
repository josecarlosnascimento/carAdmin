import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/veiculos/veiculo.service';
import { DespesasService } from 'src/app/despesas/despesas.service';
import { LocacaoService } from 'src/app/locacao/locacao-service';

@Component({
  selector: 'app-balanco-listagem',
  templateUrl: './balanco-listagem.component.html',
  styleUrls: ['./balanco-listagem.component.css']
})
export class BalancoListagemComponent implements OnInit {

  constructor(private despesasService: DespesasService,
              private veiculoService: VeiculoService,
              private locacaoService: LocacaoService ) { }
  balancos = [];
  despesas = [];  
  locacoes = [];
  valorTotalDespesas: number;
  valorTotalLocacoes: number;
  modelo: String;
  placa: String;


  ngOnInit() {
    this.listarBalanco();
  }

  listarBalanco(){
    this.veiculoService.listarBalanc().then(balanco => {
      this.balancos = balanco;
    });
  }

  listarDespesas(codigo: Number, modelo: String, placa: String){
    this.modelo = modelo;
    this.placa = placa;

    this.despesasService.listarDespesasPorVeiculo(codigo).then(despesa => {
      this.despesas = despesa;
      this.valorTotalDespesas = this.somarDespesas(this.despesas);
    });

     this.locacaoService.listarLocacaoPorVeiculo(codigo).then(locacao => {
      this.locacoes = locacao;
      this.valorTotalLocacoes = this.somarValorLocacoes(this.locacoes);
     } )
  }


  private somarDespesas(despesa: any): number{

    let valor: number = 0;

    despesa.forEach(element => {
      valor += Number(element.valor);
    });

    return valor;

  }

  private somarValorLocacoes(locacao: any): number{

    let valor: number = 0;

    locacao.forEach(element => {
      valor += Number(element.valor);
    });

    return valor;

  }
}
