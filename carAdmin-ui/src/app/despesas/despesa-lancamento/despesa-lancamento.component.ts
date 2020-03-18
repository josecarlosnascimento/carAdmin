import { Component, OnInit, Input } from '@angular/core';
import { DespesasService } from '../despesas.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Veiculo } from 'src/app/core/model';
import { ActivatedRoute } from '@angular/router';
import { VeiculoService } from 'src/app/veiculos/veiculo.service';

@Component({
  selector: 'app-despesa-lancamento',
  templateUrl: './despesa-lancamento.component.html',
  styleUrls: ['./despesa-lancamento.component.css']
})
export class DespesaLancamentoComponent implements OnInit {


  tipoDespesa: [];
  formulario: FormGroup;
  veiculo: Veiculo;

  constructor(private despesaService: DespesasService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private veiculoService: VeiculoService) { }


  ngOnInit() {
    this.configurarFormulario();
    this.listarTipoDespesa();

    const codigoVeiculo= this.route.snapshot.params['codigo'];


    this.veiculoService.buscarPorId(codigoVeiculo).then(resultado => {
      this.veiculo = resultado;
    });

  }

  listarTipoDespesa(){
    this.despesaService.listarTiposDespesa().then(result => {
      console.log(result)
      this.tipoDespesa = result;
    });
  }

  salvar(){
    this.despesaService.salvarDespesa(this.formulario.value, this.veiculo).then(() =>{
      this.formulario.reset();
      this.toastr.success('Despesa cadastrada com sucesso.')
    })
  }

  configurarFormulario() {

    this.formulario = this.formBuilder.group({

      id: [],
      valor: [null, Validators.required],
      descricao: [null, Validators.required],
      tipoDespesa: [null, Validators.required],
     
    })

  }

}
