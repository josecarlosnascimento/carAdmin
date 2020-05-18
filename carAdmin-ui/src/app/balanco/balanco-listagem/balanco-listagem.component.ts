import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/veiculos/veiculo.service';
import { DespesasService } from 'src/app/despesas/despesas.service';

@Component({
  selector: 'app-balanco-listagem',
  templateUrl: './balanco-listagem.component.html',
  styleUrls: ['./balanco-listagem.component.css']
})
export class BalancoListagemComponent implements OnInit {

  constructor(private despesasService: DespesasService,
            private veiculoService: VeiculoService) { }
  balancos = [];
  despesas = [];  
  valorTotalDespesas: number;
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
  }


  private somarDespesas(despesa: any): number{

    let valor: number = 0;

    despesa.forEach(element => {
      valor += Number(element.valor);
    });

    return valor;

  }

}
