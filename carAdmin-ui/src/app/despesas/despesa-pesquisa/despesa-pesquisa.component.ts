import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/veiculos/veiculo.service';

@Component({
  selector: 'app-despesa-pesquisa',
  templateUrl: './despesa-pesquisa.component.html',
  styleUrls: ['./despesa-pesquisa.component.css']
})
export class DespesaPesquisaComponent implements OnInit {

  veiculos: [];
  constructor(private veiculoService: VeiculoService) { }

  ngOnInit() {
    this.listarVeiculos();
  }

  listarVeiculos(){
    this.veiculoService.listarVeiculos().then(veiculos => {
      this.veiculos = veiculos;
    });
  }

}
