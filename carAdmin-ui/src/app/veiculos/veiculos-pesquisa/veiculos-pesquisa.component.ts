import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculos-pesquisa',
  templateUrl: './veiculos-pesquisa.component.html',
  styleUrls: ['./veiculos-pesquisa.component.css']
})
export class VeiculosPesquisaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'marca', 'modelo', 'placa', 'tipo', 'categoria'];
  dataSource = [];

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit() {

    this.listarVeiculos();

  }

  listarVeiculos(){
    this.veiculoService.listarVeiculos().then(veiculos => {
      this.dataSource = veiculos;
    });
  }

}
